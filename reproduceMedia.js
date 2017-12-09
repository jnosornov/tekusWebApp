
/*
window.onload = function() {
    //console.log('window loaded');
}*/

// play media module
var reproduceMedia = (function(){
    
    // selectors
    var currentVideoSelector = '.insertedVideo';
    var playIconSelector = 'play_media';
    var mediaSesionSelector = '.media';

    // elements
    var currentVideoElement = document.querySelector(currentVideoSelector);
    var playIconElement = document.getElementById(playIconSelector);
    var mediaSesionElement = document.querySelector(mediaSesionSelector);

    // variables
    // incoming data from backend 
    var mediaNames = ['Tekus_BG1.jpg','Arkbox.mp4','Tekus_BG2.jpg','Cronometro.mp4'];
    var mediaTimes = [5,-1,10,10];
    // html to add video or image
    var htmlVideo = "<video class='insertedVideo' controls autoplay><source src='C:/Media/%video%' type='video/mp4'></video>";
    var htmlImage = "<img class='insertedImage' src='C:/Media/%image%'>";
    // timer variables
    var t = 0;
    var activityTimeOut;
    var timeElapsed = 0;
    var timer_is_on = 0;
    var mediaPlaying = 0;

    // function to create a container for media to be add
    var mediaContainer = function() {
        // create element
        var mediaContainerTag = 'div';
        var mediaContainerElement = document.createElement(mediaContainerTag);

        // add element to DOM tree
        mediaSesionElement.appendChild(mediaContainerElement).classList.add('content');

        // element
        var mediaContentSelector = '.content';
        var mediaContentElement = document.querySelector(mediaContentSelector);

        return mediaContentElement;
    }
    
    // function that adds media to the media container
    var addMedia = function(name, mediaContent) {
        var loadMedia, newHtmlImage, newHtmlVideo;
        var isAnImage = name.includes('.jpg');
        if(isAnImage) {
            newHtmlImage = htmlImage.replace('%image%', name);
            loadMedia = newHtmlImage;
        } else {
            newHtmlVideo = htmlVideo.replace('%video%', name);
            loadMedia = newHtmlVideo;
        }
        mediaContent.insertAdjacentHTML('afterbegin', loadMedia); 
    }

    // time counter variables
    var playMedia = function() {
        var mediaContentElement = mediaContainer();
        addMedia(mediaNames[0], mediaContentElement);
        startCount(10);

        // start counter function
        function startCount(timeOut) {
            if(!timer_is_on) {
                timer_is_on = 1;
                timedCount(timeOut);
            }
        }

        // time counter, with timeOut step time
        function timedCount(mediaTimeOut) {
            t = setTimeout(function(){ timedCount(mediaTimeOut); }, 1000);
            timeElapsed = timeElapsed + 1;
            if(timeElapsed === mediaTimeOut) {
                stopCount(mediaPlaying);
                mediaPlaying = mediaPlaying + 1;
            }
        }
        
        // stop counter function
        function stopCount(media) {
            clearTimeout(t);
            timeElapsed = 0;
            timer_is_on = 0;            
            mediaContentElement.removeChild(mediaContentElement.firstChild);
            
            if(media < mediaNames.length) {
                addMedia(mediaNames[media], mediaContentElement);
                startCount(10);
            } else {
                //console.log('I am here');
                mediaContentElement.classList.remove('content');
            }
        }
    }

    var init = function() {
        // event listener that triggers media reproduction
        playIconElement.addEventListener('click', playMedia);
    }

    return {
        init: init
    }

}());

document.addEventListener('DOMContentLoaded', function() {
    reproduceMedia.init();
});



//on load made a request to backend to know the media available

//backend returns media available (to make proves read it from Media folder)

//we compare the data with local data



//if data complete reproduce it

//if some data reproduce it and send a request to backend to download

//if no data send request to backend to download

//reproduce Media folder data