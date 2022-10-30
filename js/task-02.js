const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredients[i];
  arr.push(li);
}

document.querySelector("ul#ingredients").append(...arr);