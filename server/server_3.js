const express = require('express');
const fs = require('fs');
const app = express();
const port = 3003;
const cors = require('cors');

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'suaChaveSecreta';

const { v4: uuidv4 } = require('uuid');



app.use(cors());
app.use(express.json());

let data = []; // Inicializa um array para armazenar os objetos JSON

app.get('/generate-token', (req, res) => {
  const userId = uuidv4(); // Gera um UUID
  const token = jwt.sign({ userId: userId }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});


app.post('/coordinates', (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
          return res.status(403).json({ message: 'Token inválido' });
      }

      const { latitude, longitude, time, questionId, features, timeDiff, leftClickCount, userResponse, mapStyle, setName} = req.body;

      const entry = {
          userId: decoded.userId, 
          questionId: questionId,
          setName: setName,
          timestamp: time,
          clickedCoordinates: [longitude, latitude],
          timeDifference: timeDiff,
          leftClickCount: leftClickCount,
          features: features,
          userResponse: userResponse,
          mapStyle: mapStyle // Inclui o estilo do mapa
      };

      data.push(entry); // Adiciona a nova entrada ao array

      // Salva o array atualizado em um arquivo JSON
      fs.writeFileSync('data/respostas_3.json', JSON.stringify(data, null, 2), 'utf8');

      res.status(200).send('Dados recebidos e salvos.');
  });
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});


