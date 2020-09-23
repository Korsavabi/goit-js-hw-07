'use strict';
// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.getElementById('name-input');
const textName = document.getElementById('name-output');

inputName.addEventListener('input',()=>{
    textName.textContent = inputName.value;
    if(inputName.value === '') textName.textContent = 'незнакомец';
})