import { galleryItems } from "./gallery-items.js";

const galleryBoxEl = document.querySelector(".gallery");

function createListItemsMarkup(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"      
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryBoxEl.innerHTML = createListItemsMarkup(galleryItems);

galleryBoxEl.addEventListener("click", onGalleryBoxClick);

function onGalleryBoxClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
  });
}
