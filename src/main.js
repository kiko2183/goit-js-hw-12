import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderImageGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let lightbox;

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();
  page = 1;
  gallery.innerHTML = '';
  loadMoreBtn.style.display = 'none';

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search query cannot be empty',
    });
    return;
  }

  await fetchImagesAndRender(false);
}

async function onLoadMore() {
  page += 1;
  await fetchImagesAndRender(true);
}

async function fetchImagesAndRender(shouldScroll) {
  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try again!',
      });
      return;
    }
    const markup = renderImageGallery(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    } else {
      lightbox.refresh();
    }

    if (data.hits.length < 15 || page * 15 >= data.totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }

    if (shouldScroll) {
      const { height: cardHeight } = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
}
