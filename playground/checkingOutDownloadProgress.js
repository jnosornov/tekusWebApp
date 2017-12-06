const fs = require('fs');
const request = require('request');
const progress = require('request-progress');

var fileStream;
var files = ['Tekus_BG1.jpg']

function downloadMediaFiles (nameFiles) {
    fileStream = fs.createWriteStream(`C:/Test/${nameFiles}`);
    progress(request(`http://cdn.tekus.co/Media/${nameFiles}`), { })
    .on('progress', function(state) {
        console.log('progress', state);
    })
    .pipe(fileStream);
    console.log(`Downloading file: ${nameFiles}`);
};

downloadMediaFiles(files);