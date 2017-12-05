var mediaObject = [ 
    { Name: 'Tekus_BG1.jpg', Duration: '5' },
    { Name: 'Arkbox.mp4', Duration: '-1' },
    { Name: 'Tekus_BG2.jpg', Duration: '10' },
    { Name: 'Cronometro.mp4', Duration: '10' } ]

//console.log(mediaObject[0].Name);
//console.log(mediaObject.length);


var files = [];
for(var i = 0; i < mediaObject.length; i++) {
    files[i] = mediaObject[i].Name;
}

console.log(files);
