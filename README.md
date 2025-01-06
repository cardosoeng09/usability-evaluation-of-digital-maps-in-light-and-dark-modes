# Usability Evaluation of Digital Maps in Light and Dark Modes

This repository is related to the project **Usability Evaluation of Digital Maps in Light and Dark Modes**. The work involves evaluating the usability of digital maps under different visual modes, and the results and methodologies are thoroughly documented.

## Project Overview

- **Instructions and complete details** of the project are available in the provided [PDF document](path/to/your/document.pdf).
- The **responses from the usability evaluation** are stored in the file `usability_evaluation_digital_maps_results.json`.
- A detailed explanation of these results, including how the data was obtained and analyzed, is included in the PDF document.

## Usage Instructions

### Running the TileServer

To run the TileServer, use the following command:

```bash
tileserver-gl
```

The server will automatically read and follow the configuration specified in the file `config.json`.

**More details about the TileServer functionality can be found at:** [TileServer-GL GitHub Repository](https://github.com/maptiler/tileserver-gl)

### Saving Evaluation Data

To save the data from the evaluation, execute the scripts located in the `server/` directory.

For example, for the **first variation**, run the following command:

```bash
node server/server_1.js
```

### Accessing Each Evaluation Variation

After starting both the TileServer and the backend server for data extraction, access the `.html` files located in the `public/` directory to perform each of the four variations.

## **Contact**

If you have any questions or need further assistance, please contact the author:

Email: cardoso@ime.eb.br
