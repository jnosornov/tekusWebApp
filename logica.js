const fs = require('fs');

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

module.exports = {
    checkMediaFolder,
    readMediaFiles
};
