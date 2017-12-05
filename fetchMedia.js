const request = require('request');

var getMedia = (callback) => {
    request ({
        url: 'http://cdn.tekus.co/Media/PlayList.json', 
        json: true,
    }, function ( error, response, body ) {
        if ( !error && response.statusCode === 200 ) {
            callback(undefined, body);
        } else {
            callback('Unable to fetch media');
        }
    });
};

module.exports.getMedia = getMedia;