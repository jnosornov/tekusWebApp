const fs = require('fs');
const path = require('path');

const request = require('request');

const getMedia = require('./fetchMedia.js');
const checkFolder = require('./mediaController.js');
const readFiles = require('./mediaController.js');
const downloadFiles = require('./mediaController.js');
const compareArr = require('./mediaController');

getMedia.getMedia( ( errorMessage, dataRequested ) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        //console.log(dataRequested);
    }
});

var mediaObject = [ 
    { Name: 'Tekus_BG1.jpg', Duration: '5' },
    { Name: 'Arkbox.mp4', Duration: '-1' },
    { Name: 'Tekus_BG2.jpg', Duration: '10' },
    { Name: 'Cronometro.mp4', Duration: '10' } ]

var files = [];
for(var i = 0; i < mediaObject.length; i++) {
    files[i] = mediaObject[i].Name;
}

//console.log(files);

// check Media folder existence on C drive
var folder = 'C:\\Media';
var check = checkFolder.checkMediaFolder(folder);

// Check if folder already exists
if (!check) {
    // see avaidable files inside media folder
    var filesArr = readFiles.readMediaFiles(folder);
    console.log('The orginal array is: ', files);
    console.log('The actual array is: ', filesArr);
    var filesArrString = filesArr.join();
    console.log(`The files inside the Media folder are: ${filesArrString}`);
    var result = compareArr.compareMediaArr(filesArr, files);
    
    if(result === true) {
        console.log('The array is the same');
    } else {
        console.log('The compared array diff result is:', result);
        downloadFiles.downloadMediaFiles(result);
    }
        
} else {
    // download files
    downloadFiles.downloadMediaFiles(files);
}