
  // recipeCon.js
  function goToRecipeDetails(recipeName) {
    // Encode the recipe name to ensure it works correctly in the URL
    let encodedRecipeName = encodeURIComponent(recipeName);

    // Redirect the user to the recipe-details page with the recipe name as a query parameter
    window.location.href = `recipe-details.html?recipe=${encodedRecipeName}`;
  }

