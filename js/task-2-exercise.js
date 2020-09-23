'use strict';

const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.append(li);

})
