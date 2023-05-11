const compareImages = require("resemblejs/compareImages")
const fs = require('fs');

const config = require("./config.json");
const {titleEscenario, options, idEscenario } = config;

(async () => await executeTest())();

async function executeTest() {

    let resultInfo = [];
    for (let index = 1; index < 12; index++) {
        console.log(`./ghost-3.41.1-screens/E3 (${index}).png`);

        const data = await compareImages(
            fs.readFileSync(`./ghost-3.41.1-screens/${idEscenario} (${index}).png`),
            fs.readFileSync(`./ghost-4.44.0-screens/${idEscenario} (${index}).png`),
            options
        );

        resultInfo[index] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${idEscenario} (${index}).png`, data.getBuffer());
    }
    //Se crea el reporte html
    fs.writeFileSync(`./results/report.html`, createReport(resultInfo));
}

function createRowTable(eResult, index) {
    return `
    <tr>
        <td>${index}</td>
        <td>
            <img style="height: 200px;" src="./../ghost-3.41.1-screens/${idEscenario} (${index}).png" >
        </td>
        <td>
            <img style="height: 200px;" src="./../ghost-4.44.0-screens/${idEscenario} (${index}).png" >
        </td>
        <td>
            <img style="height: 200px;" src="${idEscenario} (${index}).png" >
        </td>
        <td> ${JSON.stringify(eResult)} </td>
    </tr>
    `
}

function createReport(resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        </head>
        <body class="container-fluid">
            <h1> VRT Report </h1>
            <p> <strong> Descripcion: </strong> La siguiente tabla muestra el paso a paso del escenario que se probo, aquí se identifica el numero del paso 
            el screen de la version de referencia, el screen de la version en prueba, un screen con las diferencias encontradas y por ultimo
            un informacion que nos entrega la libreria Resemblejs despues de ejecutar la comparacion.</p>
            <h2> Escenario en prueba: ${titleEscenario}</h2>
            <table  class="table" >
                <thead>
                    <tr>
                        <th>Paso</th>
                        <th>Screen V-3.41.1 REFERENCE</th>
                        <th>Screen V-4.44.0 TEST</th>
                        <th>Screen Diff</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    ${resInfo.map((e, i)=> {return createRowTable(e, i)})}
                </tbody>
            </table>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </body>
    </html>`
}