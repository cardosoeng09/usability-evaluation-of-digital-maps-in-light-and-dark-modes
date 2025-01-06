console.log("questions.js loaded");

function parseLocationString(locationString) {
    // Divide a string em partes
    var parts = locationString.split('/');

    // Converte as partes para os tipos de dados corretos
    var zoom = parseFloat(parts[0]);
    var latitude = parseFloat(parts[1]);
    var longitude = parseFloat(parts[2]);

    // Retorna um objeto com as propriedades 'center' e 'zoom'
    return {
        center: [longitude, latitude],
        zoom: zoom
    };
}

var testQuestions_1 = [
    {
        number: 1,
        type: 'clickQuestion',
        text: '1 - Identifique a localização do “Vale do Agrião" no mapa. Clique com o botão direito do mouse onde você acredita ser a localização do “Vale do Agrião”.',
        location: parseLocationString('12/-22.3595/-42.9148'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_1'
    },
    {
        number: 2,
        type: 'writtenQuestion',
        fullScreen: false,
        text: '2 - O que você acredita serem as linhas pontilhadas no mapa?',
        location: parseLocationString('11.36/-22.4804/-43.0582'),
        phase: 'test',
        setName: 'testQuestions_1'
    },
    {
        number: 3,
        type: 'multipleChoice',
        fullScreen: false,
        text: "3 - Você considera a localidade de ‘Jardim Salaco’ mais próxima da localidade ‘Parque Imbuí’ ou da localidade ‘Prata’?",
        options: ['Prata', 'Parque Imbuí'],
        location: parseLocationString('14/-22.37553/-42.98112'),
        phase: 'test',
        setName: 'testQuestions_1'
    },
    {
        number: 4,
        type: 'clickQuestion',
        text: "4 - Na área de visualização do mapa existem dois lagos, clique com o botão direito do mouse naquele que você considera o de maior área.",
        location: parseLocationString('12.98/-22.93283/-42.68367'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_1'
    },
    {
        number: 5,
        type: 'multipleChoice',
        text: "5 - Identifique qual o ‘Vale’ mais próximo da localidade ‘Grotão’.",
        options: ['Vale do Cedrinho', 'Vale São Fernando', 'Vale do Roncador'],
        location: parseLocationString('13.33/-22.37882/-42.92169'),
        phase: 'test',
        setName: 'testQuestions_1'
    },
    {
        number: 6,
        type: 'clickQuestion',
        text: "6 - Na área de visualização do mapa existem cinco áreas de vegetação. Clique com o botão direito do mouse nas três de maior área. Comece clicando da maior área em seguida clique na segunda menor área e assim por diante.",
        location: parseLocationString('15.43/-22.506243/-43.142845'),
        phase: 'test',
        rightClicks: 3,
        setName: 'testQuestions_1'
    },
    {
        number: 7,
        type: 'clickQuestion',
        text: "7 - Encontre a ‘Rua Doutor Aleixo’ que intersecciona a ‘Avenida Lúcio Meira'. Clique com o botão direito do mouse onde você considera que seja a 'Rua Doutor Aleixo'.",
        location: parseLocationString('15.92/-22.408469/-42.965494'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_1'
    },
    {
        number: 8,
        type: 'clickQuestion',
        text: "8 - Identifique a rodovia que você acredita ser a principal ligação entre os municípios de ‘Itaipava’ e ‘Teresópolis’. Clique com o botão direito do mouse no que você considera ser esta principal ligação.",
        location: parseLocationString('12.07/-22.40292/-43.03578'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_1'
    }
];

var testQuestions_2 = [
    {
        number: 1,
        type: 'clickQuestion',
        text: '1 - Identifique a localização de ‘Campos Elíseos’ no mapa. Clique com o botão direito do mouse onde você acredita ser a localização de ‘Campos Elíseos’.',
        location: parseLocationString('11.98/-22.39889/-42.27582'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 2,
        type: 'writtenQuestion',
        fullScreen: false,
        text: '2 - O que você acredita serem as linhas brancas no mapa?',
        location: parseLocationString('13.95/-22.41275/-42.13894'),
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 3,
        type: 'multipleChoice',
        fullScreen: false,
        text: "3 - Você considera a localidade de ‘Ribeirão’ mais próxima da localidade ‘Vale dos Peões’ ou ‘Santiago’?",
        options: ['Vale dos Peões', 'Santiago'],
        location: parseLocationString('13.95/-22.35781/-42.33374'),
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 4,
        type: 'clickQuestion',
        text: "4 - Na área de visualização do mapa existem dois lagos, clique com o botão direito do mouse naquele que você considera o de maior área.",
        location: parseLocationString('12.97/-22.13189/-42.33185'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 5,
        type: 'multipleChoice',
        text: "5 - Identifique, entre as opções fornecidas, qual a localidade mais próxima da localidade ‘Maria Mendonça’.",
        options: ['Ponte Nova', 'Gravatá', 'Ponte de Zinco'],
        location: parseLocationString('12.79/-22.18349/-42.15117'),
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 6,
        type: 'clickQuestion',
        text: "6 - Na área de visualização do mapa existem três áreas de vegetação. Ordene-as de acordo com a sua área. Comece clicando com o botão direito na de maior área, em seguida clique na de segunda menor área e assim por diante.",
        location: parseLocationString('13.9/-22.26684/-41.95058'),
        phase: 'test',
        rightClicks: 3,
        setName: 'testQuestions_2'
    },
    {
        number: 7,
        type: 'clickQuestion',
        text: "7 - Encontre a ‘Rua Alfredo Backer’ que intersecciona a ‘Rua Doutor Télio Barreto'. Clique com o botão direito do mouse onde você considera que seja a 'Rua Alfredo Becker'.",
        location: parseLocationString('15.95/-22.369408/-41.78197'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 8,
        type: 'clickQuestion',
        text: "8 - Na área de visualização, identifique um curso d'água que auxilia a determinação de um limite entre estados. Clique com o botão direito do mouse onde você considera que seja este curso d'água.",
        location: parseLocationString('9.18/-21.738/-42.8718'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    }
];

var testQuestions_2_dark = [
    {
        number: 1,
        type: 'clickQuestion',
        text: '1 - Identifique a localização de ‘Campos Elíseos’ no mapa. Clique com o botão direito do mouse onde você acredita ser a localização de ‘Campos Elíseos’.',
        location: parseLocationString('11.98/-22.39889/-42.27582'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 2,
        type: 'writtenQuestion',
        fullScreen: false,
        text: '2 - O que você acredita serem as linhas cinzas no mapa?',
        location: parseLocationString('13.95/-22.41275/-42.13894'),
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 3,
        type: 'multipleChoice',
        fullScreen: false,
        text: "3 - Você considera a localidade de ‘Ribeirão’ mais próxima da localidade ‘Vale dos Peões’ ou ‘Santiago’?",
        options: ['Vale dos Peões', 'Santiago'],
        location: parseLocationString('13.95/-22.35781/-42.33374'), 
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 4,
        type: 'clickQuestion',
        text: "4 - Na área de visualização do mapa existem dois lagos, clique com o botão direito do mouse naquele que você considera o de maior área.",
        location: parseLocationString('12.97/-22.13189/-42.33185'), 
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 5,
        type: 'multipleChoice',
        text: "5 - Identifique, entre as opções fornecidas, qual a localidade mais próxima da localidade ‘Maria Mendonça’.",
        options: ['Ponte Nova', 'Gravatá', 'Ponte de Zinco'],
        location: parseLocationString('12.79/-22.18349/-42.15117'),
        phase: 'test',
        setName: 'testQuestions_2'
    },
    {
        number: 6,
        type: 'clickQuestion',
        text: "6 - Na área de visualização do mapa existem três áreas de vegetação. Ordene-as de acordo com a sua área. Comece clicando com o botão direito na de maior área, em seguida clique na de segunda menor área e assim por diante.",
        location: parseLocationString('13.9/-22.26684/-41.95058'),
        phase: 'test',
        rightClicks: 3,
        setName: 'testQuestions_2'
    },
    {
        number: 7,
        type: 'clickQuestion',
        text: "7 - Encontre a ‘Rua Alfredo Backer’ que intersecciona a ‘Rua Doutor Télio Barreto'. Clique com o botão direito do mouse onde você considera que seja a 'Rua Alfredo Becker'.",
        location: parseLocationString('15.95/-22.369408/-41.78197'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    },
    {
        number: 8,
        type: 'clickQuestion',
        text: "8 - Na área de visualização, identifique um curso d'água que auxilia a determinação de um limite entre estados. Clique com o botão direito do mouse onde você considera que seja este curso d'água.",
        location: parseLocationString('9.18/-21.738/-42.8718'),
        phase: 'test',
        rightClicks: 1,
        setName: 'testQuestions_2'
    }
];

var quizQuestions = [
    
    {
        number: 1,
        type: 'multipleChoice',
        text: "Em uma escala de 1 a 5, sendo 1 'muito desconfortável em relação ao mapa claro' e 5 'muito confortável em relação ao mapa claro', quão confortável foi a experiência de utilizar o mapa escuro em comparação com o mapa claro?",
        options: ['1', '2', '3', '4', '5'],
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    },
    {
        number: 2,
        type: 'multipleChoice',
        text: "Em uma escala de 1 a 5, sendo 1 'muito difícil interpretação' e 5 'muito fácil interpretação', quão fácil foi a experiência de interpretar o mapa escuro em comparação com o mapa claro?",
        options: ['1', '2', '3', '4', '5'],
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    },
    {
        number: 3,
        type: 'multipleChoice',
        text: "Qual mapa você preferiu utilizar?",
        options: ['Claro', 'Escuro'],
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    },
    {
        number: 4,
        type: 'writtenQuestion',
        text: "Explique brevemente por que você preferiu utilizar o mapa escolhido na questão anterior.",
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    },
    {
        number: 5,
        type: 'writtenQuestion',
        text: "Quais sugestões ou recomendações você daria para melhorar a experiência geral de uso do mapa ESCURO? Utilize esse espaço para colocar quaisquer observações e/ou sugestões que tenha.",
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    },
    {
        number: 6,
        type: 'multipleChoice',
        text: "Qual o seu gênero?",
        options: ['Masculino', 'Feminino', 'Outro', 'Prefiro não responder'],
        phase: 'quiz',
        fullScreen: true,
        setName: 'quizQuestions'
    }
];
