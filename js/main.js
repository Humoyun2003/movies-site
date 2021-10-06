const elSelect = document.querySelector('.select-genre');
const elSelectSort = document.querySelector('.select-sort');
const elForm = document.querySelector('.form-search');
const elSpan = document.querySelector('.span');
const elBoxContent = document.querySelector('.box-container');
const elSearchInput = document.querySelector('.input-search');


editGenreOptions(films, elSelect);

renderFilms(films.sort(sortFunctions[0]), elBoxContent);

elForm.addEventListener('input', filmsSortFn)



// const elLike = document.querySelector('.like');
// const elHeart = document.querySelector('.like-icon');
// let sum = false;

// elLike.addEventListener('click', (e) => {
// 	if (sum === false) {
// 		elHeart.classList.toggle('fas',);
// 		sum = true;
// 	}
// 	if (sum === true) {
// 		elHeart.classList.toggle('far');
// 		sum = false;
// 	}
// });