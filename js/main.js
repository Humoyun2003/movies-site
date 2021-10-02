const elSelect = document.querySelector('.select');
const elForm = document.querySelector('.form');
const elSpan = document.querySelector('.span');
const elBoxContent = document.querySelector('.box-container');

editGenreOptions(films, elSelect);

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	let filteredFilm = [];
	if(elSelect.value == 'all') {
		filteredFilm = films;
	}
	else {
		filteredFilm = films.filter(film => film.genres.includes(elSelect.value));
	}
	renderFilms(filteredFilm, elBoxContent);
	elSpan.textContent = elSelect.value;
})