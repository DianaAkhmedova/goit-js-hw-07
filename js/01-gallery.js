import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  list: document.querySelector(".gallery"),
};

const markup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

refs.list.innerHTML = markup;

const onGalleryClick = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) return;

  const originalImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${originalImage}">
`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key && event.code !== "Escape") return;

    instance.close();
  });
};

refs.list.addEventListener("click", onGalleryClick);
