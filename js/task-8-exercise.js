'use strict';

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let count;
const boxRefs = {
    div: document.getElementById('boxes'),
    input: document.querySelector("[type='number']"),
    renderButton: document.querySelector("[data-action='render']"),
    destroyButton: document.querySelector("[data-action='destroy']"),
};
console.log(boxRefs);
boxRefs.input.addEventListener('change', () => {
    count = boxRefs.input.value;
    return count;
});
console.log(count);
boxRefs.renderButton.addEventListener('click', () => {
    createBoxes(count);
});
boxRefs.destroyButton.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
    let size = 30;
    const colorBox = document.createElement('div');
    colorBox.style.width = size + 'px';
    colorBox.style.height = size + 'px';
    for (let i = 1; i <= amount; i++) {
        size += 10;
        const colorBox = document.createElement('div');
        colorBox.style.width = size + 'px';
        colorBox.style.height = size + 'px';
        let color = createRgb();
        colorBox.style.backgroundColor = color;
        boxRefs.div.append(colorBox);
    }
}
function destroyBoxes() {
    boxRefs.div.innerHTML = '';
    boxRefs.input.value = '';
}
function createRgb() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
};
