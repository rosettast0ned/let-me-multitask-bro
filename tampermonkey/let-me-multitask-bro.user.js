// ==UserScript==
// @name         Let Me Multitask, Bro
// @author       Christopher Conley
// @copyright    Copyright (C) 2023 Christopher Conley
// @license      GPLv2
// @version      0.0.1
// @description  A Tampermonkey script that allows picture-in-picture mode to be used for videos, even if the website has disabled it.
// @namespace    https://github.com/rosettast0ned/let-me-multitask-bro
// @source       https://github.com/rosettast0ned/let-me-multitask-bro
// @supportURL   https://github.com/rosettast0ned/let-me-multitask-bro/issues
// @downloadURL  https://raw.githubusercontent.com/rosettast0ned/let-me-multitask-bro/main/tampermonkey/let-me-multitask-bro.user.js
// @updateURL    https://raw.githubusercontent.com/rosettast0ned/let-me-multitask-bro/main/tampermonkey/let-me-multitask-bro.user.js
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/rosettast0ned/let-me-multitask-bro/main/tampermonkey/let_me_multitask_bro.png
// @icon64       https://raw.githubusercontent.com/rosettast0ned/let-me-multitask-bro/main/tampermonkey/let_me_multitask_bro64.png
// @run-at       document-idle
// ==/UserScript==

(function () {
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

})();
