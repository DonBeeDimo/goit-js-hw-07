const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsItemEl = document.querySelector('#ingredients');  
  
    const createListIngredients = ingredient => {
        return ingredient.map(ingredient => {
            const ingredientEl = document.createElement('li');
            ingredientEl.textContent = ingredient;
    
            return ingredientEl;
        });
    }

    const elements = createListIngredients(ingredients)
    ingredientsItemEl.append(...elements); 

    console.log(ingredientsItemEl)