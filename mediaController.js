const fs = require('fs');
const path = require('path');

const request = require('request');
const getMedia = require('./fetchMedia.js');

getMedia.getMedia( ( errorMessage, dataRequested ) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(dataRequested);
    }
});
