/**
@module   camera.js
@desc     Webcam init and helper
@category public

Initializes a user-facing camera,
returns a video element (initialised asynchronously).
*/

export default { init }

let video;
async function init(callback) {
    // Avoid double init of video object
    if (!video) {
        video = await getUserMedia(callback);
    }
    return video;
}

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
async function getUserMedia(callback) {
    // getUserMedia is not supported by browser
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        throw new DOMException('getUserMedia not supported in this browser');
    }

    // Create a video element
    const video = document.createElement('video');
    video.setAttribute('playsinline', ''); // Required to work in iOS 11 & up

    const constraints = {
        audio: false,
        video: { facingMode: "user" }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if ('srcObject' in video) {
            video.srcObject = stream;
        } else {
            video.src = window.URL.createObjectURL(stream);
        }
        video.addEventListener('loadedmetadata', function() {
            video.play();
            if (typeof callback === 'function') callback(video.srcObject);
        });
        console.log('Camera permission granted');
    } catch (error) {
        console.error('Camera permission denied', error);
        throw error;
    }

    return video;
}