function renderGallery(folder, images) {
  const container = document.getElementById("gallery");

      images.forEach(({ filename, caption }) => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = `${folder}${filename}`;
        img.alt = caption;

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = caption;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
      });
        if (images.length === 1) {
        container.classList.add("single-image");
  }
}
