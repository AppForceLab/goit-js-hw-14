const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let elements = [];

ingredients.forEach((e)=>{
 let element = document.createElement('li');
 element.classList.add('item');
 element.textContent = e;
 elements.push(element);
})

document.querySelector("#ingredients").append(...elements);