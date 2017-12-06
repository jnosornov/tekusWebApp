const fs = require('fs');
const request = require('request');
const progress = require('request-progress');

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
    }
};

var compareMediaArr = function (arr1, arr2) {
    //console.log(arr1);
    //console.log(arr2);
    if(arr1.length === arr2.length) {
        return true;
    } else {
        var greaterArr, lowerArr;
        if(arr1.length > arr2.length) {
            greaterArr = arr1;
            lowerArr = arr2;
        } else {
            greaterArr = arr2;
            lowerArr = arr1;
        }

        var arr = [];
        var includes;
        for(var i = 0; i < greaterArr.length; i++) {
            includes = lowerArr.indexOf(greaterArr[i]);
            if(includes === -1) {
                arr.push(greaterArr[i]) ;
            } 
        }
        
        return arr;
    }
};

module.exports = {
    checkMediaFolder,
    readMediaFiles,
    downloadMediaFiles,
    compareMediaArr
};
