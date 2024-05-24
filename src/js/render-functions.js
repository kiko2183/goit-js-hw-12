export function renderImageGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
            <div class="gallery-item">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" />
                </a>
                <div class="gallery-item-info">
                    <p>Likes: ${likes}</p>
                    <p>Views: ${views}</p>
                    <p>Comments: ${comments}</p>
                    <p>Downloads: ${downloads}</p>
                </div>
            </div>
        `;
      }
    )
    .join('');
}
