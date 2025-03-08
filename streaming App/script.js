// Get references to the video, canvas, and capture button elements
const videoElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const photoElement = document.getElementById('photo');

// Check if the user's browser supports the getUserMedia API
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Display the camera stream in the video element
            videoElement.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing the camera:', error);
        });

    // Add an event listener to the capture button
    captureButton.addEventListener('click', function () {
        // Create a canvas context and draw the current video frame on it
        const context = canvasElement.getContext('2d');
        context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

        // Convert the canvas content to a data URL (base64-encoded image)
        const photoDataUrl = canvasElement.toDataURL('image/png');

        // Set the captured photo as the source of the <img> element
        photoElement.src = photoDataUrl;
    });
} else {
    console.error('getUserMedia not supported in this browser');
}
