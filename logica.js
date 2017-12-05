const fs = require('fs');
const request = require('request');

var checkMediaFolder = function(directory) {
    var e;
    try {
        fs.statSync(directory);
    } catch(e) {
        //console.log('folder does not exist yet');
        fs.mkdirSync(directory);
        return e;
    }
};

var readMediaFiles = function(directory) {
    return fs.readdirSync(directory);
};

var fileStream;

var downloadMediaFiles = function (nameFiles) {
    for(var i = 0; i < nameFiles.length; i++) { 
        fileStream = fs.createWriteStream(`C:/Media/${nameFiles[i]}`);
        request(`http://cdn.tekus.co/Media/${nameFiles[i]}`).pipe(fileStream);
        console.log(`Downloading file: ${nameFiles[i]}`);
    }
};

module.exports = {
    checkMediaFolder,
    readMediaFiles,
    downloadMediaFiles
};
