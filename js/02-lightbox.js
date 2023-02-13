import { galleryItems } from "./gallery-items.js";

const galleryBoxEl = document.querySelector(".gallery");

function createListItemsMarkup(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

galleryBoxEl.innerHTML = createListItemsMarkup(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  scrollZoom: false,
  captionType: "attr",
  captionSelector: "img",
  captionsData: "alt",
  docClose: false,
});
