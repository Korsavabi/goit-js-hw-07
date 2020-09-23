'use strict';

let list = document.querySelectorAll('#categories li.item');
let categoriesCaunt = list.length
console.log(`В списке ${categoriesCaunt} категории.`);



list.forEach((elem, i) => {
    let h2 = document.querySelectorAll('li.item h2');
    let li = document.querySelectorAll('li.item ul');
    elem = li;
    console.log(`${h2[i].textContent}`);
    console.log(`Количество элементов:  ${elem[i].children.length}`);
})
