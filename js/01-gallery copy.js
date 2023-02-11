import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");

function createListItemsMarkup(obj) {
  return obj
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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

  const instance = basicLightbox
    .create(
      `<img src="${e.target.dataset.source}" width="1280" height="855">`,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
              instance.close();
            }
          });
        },
        onClose: (instance) => {
          window.removeEventListener("keydown", (e) => {
            if (e.code === "Escape") {
              instance.close();
            }
          });
        },
      }
    )
    .show();

  // const onEcsClick = (e) => {
  //   if (e.code === "Escape") {
  //     instance.close();
  //   }
  // };

  //   const instance = basicLightbox
  //     .create(
  //       `<img src="${e.target.dataset.source}" width="1280" height="855">`,
  //       {
  //         onShow: (instance) => {
  //           window.addEventListener("keydown", onEcsClick);
  //         },
  //         onClose: (instance) => {
  //           window.removeEventListener("keydown", onEcsClick);
  //         },
  //       }
  //     )
  //     .show();
}
