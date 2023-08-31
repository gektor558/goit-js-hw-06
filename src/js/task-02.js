const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingridientsLists = document.querySelector('#ingredients');
const ingredientsArr = [];
ingredients.map(element => {
  const ingingredientItem = document.createElement('li');
  ingingredientItem.textContent = element;
  ingingredientItem.classList.add('item');
  ingredientsArr.push(ingingredientItem);
});
ingridientsLists.append(...ingredientsArr);