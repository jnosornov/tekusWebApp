//Selectors



var videoSelector = document.querySelector('.insertedVideo');


var playMedia = document.getElementById('play_media');
var mediaSesion = document.querySelector('.media');


var htmlVideo = "<video class='insertedVideo' controls autoplay><source src='C:/Media/Arkbox.mp4' type='video/mp4'></video>";

playMedia.addEventListener('click', function() {
    var playMediaContainer = document.createElement('div');
    mediaSesion.appendChild(playMediaContainer).classList.add('content');

    var mediaContent = document.querySelector('.content');
    mediaContent.insertAdjacentHTML('beforeend', htmlVideo);
    setTimeout(() => {
        mediaContent.removeChild(mediaContent.firstChild);
    }, 10000);
});




/*
var reproduceMedia = document.getElementById('download');
var mediaContainer = document.getElementById('content');
var content = document.querySelector('.content');
*/
//content.style.backgroundColor = 'skyblue';
/*
downloadState.addEventListener('click', function() {
    mediaContainer.classList.add('content');
    mediaContainer.style.backgroundColor('red');
    /*console.log('Hello World, enjoy it!');
});


var mediaNames = [Tekus_BG1.jpg,Arkbox.mp4,Tekus_BG2.jpg,Cronometro.mp4];
var mediaTimes = [5,-1,10,10];
*/

//on load made a request to backend to know the media available

//backend returns media available (to make proves read it from Media folder)

//we compare the data with local data

//if data complete reproduce it

//if some data reproduce it and send a request to backend to download

//if no data send request to backend to download

//reproduce Media folder data