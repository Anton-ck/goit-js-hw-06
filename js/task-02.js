const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(element => {
  const ingridient = document.createElement('li');
  ingridient.classList.add('item');
  ingridient.textContent = element;
  // console.log(element);
      console.log(ingridient);
      return ingridient;
});

const listIngridients = document.querySelector('#ingredients');
listIngridients.append(...elements);