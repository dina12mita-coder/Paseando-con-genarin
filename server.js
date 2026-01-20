const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Manejar la ruta raíz
    let filePath = req.url === '/' ? '/index.html' : req.url;

    // Resolver la ruta completa
    filePath = path.join(__dirname, filePath);

    // Obtener la extensión del archivo
    const ext = path.extname(filePath);

    // Mapear extensiones a tipos MIME
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
    };

    const contentType = mimeTypes[ext] || 'text/plain';

    // Leer y servir el archivo
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Archivo no encontrado
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>');
            } else {
                // Error del servidor
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Error interno del servidor</h1>');
            }
        } else {
            // Archivo encontrado, servirlo
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📁 Proyecto: Paseando con Genarin`);
    console.log(`🎯 Abre tu navegador y visita: http://localhost:${PORT}`);
});