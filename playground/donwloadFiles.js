const fs = require('fs');
const request = require('request');

var fileStream;
var files = [ 'Tekus_BG1.jpg', 'Arkbox.mp4', 'Tekus_BG2.jpg', 'Cronometro.mp4' ]

function downloadMediaFiles (nameFiles) {
    for(var i = 0; i < nameFiles.length; i++) { 
        fileStream = fs.createWriteStream(`C:/Media/${nameFiles[i]}`);
        request(`http://cdn.tekus.co/Media/${nameFiles[i]}`).pipe(fileStream);
        console.log(`Downloading file: ${nameFiles[i]}`);
    }
};

downloadMediaFiles(files);

