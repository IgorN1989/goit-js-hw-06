const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredientsMarkup = ingredients.map((elem) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = elem;
  return ingredient;
});

ingredientsList.append(...ingredientsMarkup);