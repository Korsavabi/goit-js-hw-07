'use strict';
const counterDecrement = document.querySelector('[data-action="decrement"]');
const counterIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0
counterDecrement.addEventListener('click', () =>{
    counterValue -=1;
    document.querySelector('#value').innerHTML = counterValue;
});

counterIncrement.addEventListener('click', () =>{
    counterValue +=1;
    document.querySelector('#value').innerHTML = counterValue;
});