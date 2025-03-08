// create_status.js

document.addEventListener("DOMContentLoaded", (event) => {
  // Get references to the select button and preview element
  const selectButton = document.getElementById('take_image');
  const preview = document.querySelector("#hello");


  // Function to handle file selection
  selectButton.addEventListener('click', function() {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none'; // Hide the input element

    // Function to handle file selection
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const img = new Image();
          img.src = event.target.result;
          preview.innerHTML = '';
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file.');
      }
    });

    // Trigger click event on the input element
    input.click();
  });

  // Function to handle image capture
  function captureImage() {
    // Check if the element exists
    if (selectButton) {
      // Add event listener to the take image button
      selectButton.addEventListener('click', function() {
        // Your code to capture image goes here
        console.log('Image capture clicked');
      });
    } else {
      console.error('Element with id "take_image" not found');
    }
  }

  // Call the captureImage function
  captureImage();

  // Function to display a preview image
  function displayPreviewImage() {
    const previewDiv = document.getElementById('preview');
    // Check if the element exists
    if (previewDiv) {
      // Create an image element
      const img = document.createElement('img');
      img.src = '/img_file/IMG_20220321_153557.jpg'; // Replace with the correct path to your image file
      img.alt = 'Preview Image'; // Set alternative text for the image

      // Append the image to the preview div
      previewDiv.appendChild(img);
    } else {
      console.error('Element with id "preview" not found');
    }
  }

  // Call the displayPreviewImage function
  displayPreviewImage();
});
