import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const cardGallery = createImageCard(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardGallery);
gallery.addEventListener('click', onGalleryClick);

function createImageCard(items) {
   return items.map(({preview, original, description}) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" 
         src="${preview}" 
         alt="${description}" />
      </a>
   </li>
      `
   }).join('');
   };

   function onGalleryClick(e) {
      e.preventDefault();
      if (!e.target.classList.contains('gallery__image')) {
         return;
      };

      const originalImage = e.target.dataset.source;
      const descriptionImage = e.target.getAttribute('alt');

      const gallery = ('.gallery').simpleLightbox();
      gallery.open('e.target');
   }
