// recipe-details.js
window.onload = function() {
    // Extract the recipe name from the URL
    let urlParams = new URLSearchParams(window.location.search);
    let recipeName = urlParams.get('recipe');

    // Assuming `recipes` is an object with recipe details imported from `recipes-items.js`
    let recipe = recipes[recipeName];

    // If the recipe exists, display its details
    if (recipe) {
        document.getElementById('recipe-title').innerText = recipe.title;
        document.getElementById('recipe-image').src = recipe.image;
        document.getElementById('recipe-description').innerText = recipe.description;
        document.getElementById('recipe-video').src = recipe.video;

        let ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(function(ingredient) {
            let li = document.createElement('li');
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        });

        let stepsList = document.getElementById('recipe-steps');
        stepsList.innerHTML = '';
        recipe.steps.forEach(function(step) {
            let li = document.createElement('li');
            li.innerText = step;
            stepsList.appendChild(li);
        });

          // Check if the video is a YouTube link
          if (recipe.video && recipe.video.includes('youtube.com')) {
            document.getElementById('recipe-video').src = recipe.video;
        } else if (recipe.video) {
            let videoElement = document.createElement('video');
            videoElement.src = recipe.video;
            videoElement.controls = true;
            document.querySelector('.video-container').innerHTML = '';
            document.querySelector('.video-container').appendChild(videoElement);
        }


    } else {
        document.getElementById('recipe-title').innerText = "Recipe not found!";
        document.getElementById('recipe-image').style.display = 'none';
        document.getElementById('recipe-description').innerText = '';
    }
};

