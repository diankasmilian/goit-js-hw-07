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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      target = "_self"
      alt="${description}"
    />
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

   document.addEventListener('keydown', (e) => {
      if (basicLightbox.visible() && e.key === 'Escape') {
         modalOpen.close();
      }
   });

   const originalImage = e.target.dataset.source;
   const descriptionImage = e.target.getAttribute('alt');

   const modalOpen = modal(originalImage, descriptionImage);
 
   modalOpen.show();
};

function modal (image, description) {
   return basicLightbox.create(`
   <div class="modal">
   <img
   class="gallery__image"
   src="${image}"
   target = "_self"
   alt="${description}"
 />
   </div>
`);
}


