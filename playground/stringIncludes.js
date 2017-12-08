var mediaNames = ['Tekus_BG1.jpg','Arkbox.mp4','Tekus_BG2.jpg','Cronometro.mp4'];
var mediaTimes = [5,-1,10,10];

function stringIncludes(arr1, arr2) {
    for(var i=0; i < arr1.length; i++) {
        if(arr1[i].includes('jpg')) {
            console.log('It is an image');
        } else {
            console.log('It is a video');
        }
    }
}

stringIncludes(mediaNames, mediaTimes);

// some defecits on this function, check later
