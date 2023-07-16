console.log('LMMB: Let Me Multitask, Bro extension triggered.')

var poller = setInterval(function () {
    if (document.querySelector('video') !== null) {
        clearInterval(poller);
        console.log("LMMB: Found video element.");

        var videos = document.querySelectorAll('video');

        videos.forEach(video => {
            if (video.hasAttribute('disablepictureinpicture')) {
                console.log('LMMB: Removing disablepictureinpicture attribute from video element.');
                video.removeAttribute('disablepictureinpicture');
            }
        });
    }
}, 50);