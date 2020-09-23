'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const valInput = document.querySelector('#validation-input');
const pClass = document.createElement('p');
const createAllert = (el, className, msg) => {
  el.classList.add(className)
  el.textContent = msg;
  valInput.after(el);
}
const removeAlert = (el, className) => {
  el.classList.remove(className);
  el.textContent = '';
}
let length = Number(valInput.dataset.length);

valInput.addEventListener('blur', () => {
  let textLength = valInput.value.length;
   // тернарник
    // length === textLength ? (valInput.classList.add("valid"), valInput.classList.remove("invalid")) :( valInput.classList.add("invalid"),  valInput.classList.remove("valid"))
    //if
  if(length === textLength){
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
    removeAlert(pClass, 'js-msg-invalid');
    createAllert(pClass, 'js-msg-valid', 'Заполнено верно!!!');
  } else {
    valInput.classList.add('invalid')
    valInput.classList.remove('valid')
    removeAlert(pClass, 'js-msg-valid')
    createAllert(pClass, 'js-msg-invalid', 'Заполнено неверно!!!');
  }
})