import { createCardTemplate } from '../card_template';
import favoritesArray from '../favorites-array';

const KEY_FAVORITE = 'favorite';

// імпорт
function createModal(product) {
  console.log(product);
}
//імпорт

const favoriteRecipesListEl = document.querySelector('.favorite-recipes-list');
const heroEl = document.querySelector('.hero-section-favorites')
const filtersEl = document.querySelector('.favorite-filter');
const paginationEl = document.querySelector('.tui-pagination');

const emptyStorageEl = document.querySelector('.empty-storage-wrapper');

// const favoriteArrFromLocalStorage =
//   JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

if (favoritesArray.length !== 0) {
  createCardTemplate(favoritesArray, favoriteRecipesListEl);
} else {
  heroEl.classList.add('hero-is-hidden');
  filtersEl.classList.add('hiddenvisualy');
  paginationEl.classList.add('hiddenvisualy');
  emptyStorageEl.classList.remove('hiddenvisualy');
}

favoriteRecipesListEl.addEventListener('click', onClick);

function onClick(evt) {
  //відкриття модалки
  if (evt.target.classList.contains('card-template-btn')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
  //видалення з favorites
  if (evt.target.classList.contains('js-add-to-fav')) {
    removeFromFavorites(evt.target, favoritesArray);
    evt.target.closest('.card-template').remove();
  }
}

function findProduct(elem) {
  const productId = elem.closest('.card-template').dataset.id;
  return favoritesArray.find(({ _id }) => _id === productId);
}

function removeFromFavorites(elem, arr) {
  const productId = elem.closest('.card-template').dataset.id;
  const removeElemIdx = arr.findIndex(
    item => item._id === productId
  );
  arr.splice(removeElemIdx, 1);
  localStorage.setItem(
    KEY_FAVORITE,
    JSON.stringify(arr)
  );
}

export { removeFromFavorites, KEY_FAVORITE };