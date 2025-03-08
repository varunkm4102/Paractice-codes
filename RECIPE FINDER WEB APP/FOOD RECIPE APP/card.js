    // Recipe filter functionality
    let inputSearch = document.getElementById('recipe-box');
    inputSearch.addEventListener('input', function() {
        let query = this.value.toLowerCase();
        let cards = document.querySelectorAll('.recipe-list');
        
        cards.forEach(function(card) {
            let title = card.getAttribute('data-title').toLowerCase();
            
            if (title.includes(query)) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    });

    function filterRecipesByCategory() {
        const selectedCategory = document.getElementById('recipe-category').value;
        const recipes = document.querySelectorAll('.recipe-list');
      
        recipes.forEach(recipe => {
          const recipeCategory = recipe.getAttribute('data-category');
          
          if (selectedCategory === 'all' || recipeCategory === selectedCategory) {
            recipe.style.display = 'block';
          } else {
            recipe.style.display = 'none';
          }
        });
      }
      

   
