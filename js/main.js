const elSelect = document.querySelector('.select-genre');
const elSelectSort = document.querySelector('.select-sort');
const elForm = document.querySelector('.form-search');
const elFormComment = document.querySelector('.form');
const elTextarea = document.querySelector('.textarea');
const elSpan = document.querySelector('.span');
const elBoxContent = document.querySelector('.box-container');
const elSearchInput = document.querySelector('.input-search');
const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

editGenreOptions(films, elSelect);

renderFilms(films.sort(sortFunctions[0]), elBoxContent);

var filteredFilm = films;

elForm.addEventListener('input', filmsSortFn);

elBoxContent.addEventListener('click', filmsSortLiked);

elFormComment.addEventListener('submit', (evt) => {
	evt.preventDefault();

	elTextarea.value = '';
})