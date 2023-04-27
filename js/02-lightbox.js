import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const cardGallery = createImageCard(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardGallery);
const lightbox = new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  scrollZoom: false,
  captionsData: 'alt',
});

function createImageCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" 
         src="${preview}" 
         alt="${description}" 
          />
      </a>
   </li>
      `;
    })
    .join('');
}
