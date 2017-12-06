// built-in node modules
const fs = require('fs');
const path = require('path');

// third party modules
const request = require('request');

// own modules
var fetchDataPath = './fetchMedia.js';
var appControllerPath = './mediaController.js';

const getMedia = require(fetchDataPath);
const checkFolder = require(appControllerPath);
const readFiles = require(appControllerPath);
const downloadFiles = require(appControllerPath);
const compareArr = require(appControllerPath);

// fetch data from PlayList.json
getMedia.getMedia( ( errorMessage, dataRequested ) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        //console.log(dataRequested);
        //dataRequested is the body of the request
    }
});

// body data test
var mediaObject = [ 
    { Name: 'Tekus_BG1.jpg', Duration: '5' },
    { Name: 'Arkbox.mp4', Duration: '-1' },
    { Name: 'Tekus_BG2.jpg', Duration: '10' },
    { Name: 'Cronometro.mp4', Duration: '10' } ]

// populate an empty array with the media names
var files = [];
var files = mediaObject.map((element, index) => mediaObject[index].Name);

// check Media folder existence on C drive
var folder = 'C:\\Media';
var checkResult = checkFolder.checkMediaFolder(folder);

// ask if folder already exists
if (!checkResult) {
    // see avaidable files inside media folder
    var filesArr = readFiles.readMediaFiles(folder);
    // compare Media folder files and original array
    var result = compareArr.compareMediaArr(filesArr, files);
    if(result !== true) downloadFiles.downloadMediaFiles(result);
} else {
    // download all the files
    downloadFiles.downloadMediaFiles(files);
}

