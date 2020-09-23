'use strict';


const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
//старый способ
// const list_gallery = document.getElementById("gallery");
// images.forEach((elem, index) => {
//   const item_gallery = `<li><img src="${elem.url}" alt="${elem.alt}" width="480" height="280"></li>`;
//   list_gallery.insertAdjacentHTML("beforeend", item_gallery);
//   const gallery_item = list_gallery.children[index];
//   gallery_item.classList.add("item-gallery");
//   console.log(gallery_item);
// });

//новый способ

const galleryList = document.querySelector('#gallery');
images.map((image, index) => {
    let li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `${image.url} `;
    img.alt = `${image.alt} `;
    img.width = '480';
    img.height = '280';
    galleryList.append(li);
    li.append(img);
})