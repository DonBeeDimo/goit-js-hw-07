const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsItemEl = document.querySelector('#ingredients');  

    // const elements = ingredients.map(ingredient => {
    //     const ingredientItemEl = document.createElement('li');
    //     ingredientItemEl.append(ingredient);

    //     return ingredientItemEl
    // });

    // console.log(elements);

    

    const createListIngredients = ingredient => {
        return ingredient.map(ingredient => {
            const ingredientItemEl = document.createElement('li');
            ingredientItemEl.append(ingredient);
    
            return ingredientItemEl
        });
    }

    const elements = createListIngredients(ingredients)
    ingredientsItemEl.append(...elements); 