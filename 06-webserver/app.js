const http = require("http");
const { stringify } = require("querystring");

//const server =
http
  .createServer((req, res) => {

    const error = {
        tipo: "error",
        nro: 404,
        mensaje: "Pagina no encontrada"
    }
    

    
    // res.writeHead(200, {'Content-Type': 'text/plain'});

    res.setHeader('Content-Disposition', 'attachment; filename=archivo.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'}); //para descargar archivos
    /*
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.write(JSON.stringify(error)); */
    res.write('id, Nombre\n')
    res.write('1, maria\n')
    res.write('2, jose\n')
    res.write('3, fran\n')


    res.end();
  })
  .listen(8080);

console.log("listening server 8080");
