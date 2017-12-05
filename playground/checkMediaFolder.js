const fs = require('fs');

var checkMediaFolder = function(directory) {
    try {
        fs.statSync(directory);
    } catch(e) {
        console.log('folder does not exist yet');
        fs.mkdirSync(directory);
    }
};

var folder = 'C:\\Menu';

checkMediaFolder (folder);