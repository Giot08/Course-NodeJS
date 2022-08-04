const http = require("http");
const { stringify } = require("querystring");

//const server =
http
  .createServer((req, res) => {


    /*


    const error = {
        tipo: "error",
        nro: 404,
        mensaje: "Pagina no encontrada"
    }
    
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Define el tipo de archivo que emite el servidor
    res.setHeader('Content-Disposition', 'attachment; filename=archivo.csv'); // Genera un archivo descargable con el contenido.
    res.writeHead(200, {'Content-Type': 'application/csv'}); //para descargar archivos
    res.writeHead(200, {'Content-Type': 'application/json'}); //para descargar archivos
    
    res.write(JSON.stringify(error)); 
    res.write('id, Nombre\n') // la n es para un salto de linea en archivo excel.
    res.write('1, maria\n')
    res.write('2, jose\n')
    res.write('3, fran\n')
    */

    res.write('hola mundo');
    res.end();
  })
  .listen(8080);

console.log("listening server 8080");
