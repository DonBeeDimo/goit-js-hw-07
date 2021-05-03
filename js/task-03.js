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

//   const galleryList = document.querySelector('#gallery');

//   const makeGalleryEl = (image) => {
//     return images.map(image => {
//       const galleryItemEl = document.createElement('li');
//       const imageEl = document.createElement('img');
//       imageEl.src = `${image.url}`;
//       imageEl.alt = `${image.alt}`;
//       imageEl.width = 200;
//       imageEl.height = 150;
//       galleryItemEl.append(imageEl);
  
//       return galleryItemEl 
//   });
// }; 

// const elements = makeGalleryEl(images);
// galleryList.append(...elements);

// galleryList.setAttribute("style", "list-style-type:none; display: flex;");

const galleryList = document.querySelector("#gallery");

const makeGalleryEl = ({ url, alt }) =>
  `<li><img  src="${url}" alt="${alt}" width = 300 height = 200></li>`;
const makeGalleryMarkup = images.reduce(
  (acc, item) => acc + makeGalleryEl(item),
  ""
);

galleryList.insertAdjacentHTML("afterbegin", makeGalleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");