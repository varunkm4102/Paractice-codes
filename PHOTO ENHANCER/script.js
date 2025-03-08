const uploadImage = document.getElementById('upload-image');
const canvas = document.getElementById('image-canvas');
const ctx = canvas.getContext('2d');
const upscaleButton = document.getElementById('upscale-button');

let originalImage = null;

uploadImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            originalImage = img;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
});

function upscaleImage() {
    if (!originalImage) return;

    // Set upscale factor
    const scaleFactor = 2;

    // Create a temporary canvas to store the scaled image
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    // Set temporary canvas size to the new scaled size
    tempCanvas.width = originalImage.width * scaleFactor;
    tempCanvas.height = originalImage.height * scaleFactor;

    // Draw the image with smoothing disabled for crisper upscaling
    tempCtx.imageSmoothingEnabled = false;
    tempCtx.drawImage(originalImage, 0, 0, tempCanvas.width, tempCanvas.height);

    // Now, draw the upscaled image onto the main canvas with image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
}

upscaleButton.addEventListener('click', upscaleImage);
