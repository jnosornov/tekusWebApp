
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

    // function to start a timer
    /*
    var startCount = function(timeOut, timer_is_on) {
        if(!timer_is_on) {
            timer_is_on = 1;
            timedCount(timeOut);
        }
    }

    // function to stop a timer
    var stopCount = function(currentMedia) {
        console.log(currentMedia);
        currentMedia = currentMedia + 1;
        clearTimeout(t);
        timeElapsed = 0;
        timer_is_on = 0;
        mediaContentElement.removeChild(mediaContentElement.firstChild);
        playMediaInRow(currentMedia);
    }

    // function to count time
    var timedCount = function(activityTimeOut) {
        t = setTimeout(function(){ timedCount(activityTimeOut); }, 1000);
        timeElapsed = timeElapsed + 1;
        /*console.log('activity time out: ' + activityTimeOut);
        console.log('time elapsed: ' + timeElapsed);
        if(timeElapsed === activityTimeOut) {
            stopCount(currentMedia);
        }
    }
    */

    // time counter variables
    var t = 0;
    var activityTimeOut;
    var timeElapsed = 0;
    var timer_is_on = 0;
    var currentMedia = 0;

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
            if(timeElapsed === mediaTimeOut) stopCount(currentMedia);
        }
        
        // stop counter function
        function stopCount(currentMedia) {
            //console.log(currentMedia);
            currentMedia = currentMedia + 1;
            clearTimeout(t);
            timeElapsed = 0;
            timer_is_on = 0;
            mediaContentElement.removeChild(mediaContentElement.firstChild);
            addMedia(mediaNames[currentMedia], mediaContentElement);
            startCount(10);
            //playMediaInRow(currentMedia);
        }

        // play media constinously, some bugs here, current Media no changing
        /*function playMediaInRow(currentMedia) {
            if(currentMedia > 0 && currentMedia < 4) {
                addMedia(mediaNames[currentMedia], mediaContentElement);
                startCount(10);
            }
        }*/
    }

    var init = function() {
        // event listener that triggers media reproduction
        playIconElement.addEventListener('click', playMedia);
    };

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