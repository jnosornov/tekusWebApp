//Selectors
var currentVideoSelector = document.querySelector('.insertedVideo');
var playIconSelector = document.getElementById('play_media');
var mediaSesionSelector = document.querySelector('.media');

var htmlVideo = "<video class='insertedVideo' controls autoplay><source src='C:/Media/%video%' type='video/mp4'></video>";
var htmlImage = "<img class='insertedImage' src='C:/Media/%image%'>";
//event to start playing media content inside Media folder

var mediaNames = ['Tekus_BG1.jpg','Arkbox.mp4','Tekus_BG2.jpg','Cronometro.mp4'];
var mediaTimes = [5,-1,10,10];

playIconSelector.addEventListener('click', function() {
    var mediaContainerSelector = document.createElement('div');
    mediaSesionSelector.appendChild(mediaContainerSelector).classList.add('content');

    //var mediaContentSelector = document.querySelector('.content');
    var newHtmlVideo, newHtmlImage;
    var mediaContentSelector = document.querySelector('.content');


    for (var i=0; i < mediaNames.length; i++) {
        console.log('This has been repeated: ' + i + ' times');
        if(mediaContentSelector.hasChildNodes()) {
            mediaContentSelector.removeChild(mediaContentSelector.firstChild);
        } 
        playStoredMedia('Cronometro.mp4');
        setTimeout(() => {
            mediaContentSelector.removeChild(mediaContentSelector.firstChild);
            playStoredMedia('Arkbox.mp4');
        }, 5000);
    }
    
    function playStoredMedia(name) {
        var loadMedia;
        if(name.includes('jpg')) {
            newHtmlImage = htmlImage.replace('%image%', name);
            loadMedia = newHtmlImage;
        } else {
            newHtmlVideo = htmlVideo.replace('%video%', name);
            loadMedia = newHtmlVideo;
        }
    
        mediaContentSelector.insertAdjacentHTML('afterbegin', loadMedia); 
    }
});



//on load made a request to backend to know the media available

//backend returns media available (to make proves read it from Media folder)

//we compare the data with local data

//if data complete reproduce it

//if some data reproduce it and send a request to backend to download

//if no data send request to backend to download

//reproduce Media folder data