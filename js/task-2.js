const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryList = document.querySelector('.gallery');


//! Variant 1

// const galleryMaker = arr => {
//   return arr.map(el => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('gallery-item');
    
//     const listImage = document.createElement('img');
//     listImage.src = el.url;
//     listImage.alt = el.alt;
//     listImage.classList.add('gallery-image');

//     listItem.append(listImage);

//     return listItem
//   })
// }

// galleryList.append(...galleryMaker(images));


//!Variant 2

// const galleryMaker = arr => {
//   return arr.map(el => {
//     return `<li class="gallery-item"><img class="gallery-image" alt="${el.alt}" src="${el.url}"/> </li>`
//   }).join("")
// }
// galleryList.innerHTML = galleryMaker(images);


//!Variant 3

const galleryMaker = arr => {
  return arr.map(el => {
    return `<li class="gallery-item"><img class="gallery-image" alt="${el.alt}" src="${el.url}"/> </li>`
  }).join("")
}
galleryList.insertAdjacentHTML('afterbegin', galleryMaker(images));






