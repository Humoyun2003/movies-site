// Render Films Array
function renderFilms(arr, node) {
	elBoxContent.innerHTML = null;

	arr.forEach(film => {
		const newBox = document.createElement('div');
		const newContent = document.createElement('div');
		const newLike = document.createElement('div');
		const newHeart = document.createElement('i');
		const newImage = document.createElement('img');
		const newHeading = document.createElement('h3');
		const newParagraph = document.createElement('p');
		const newTime = document.createElement('p');
		const newGenreList = document.createElement('ul');
		const newBtn = document.createElement('a');

		newHeading.textContent = film.title;
		newParagraph.textContent =
		film.overview.split(' ').slice(0, 25).join(' ') + '...';
		newTime.textContent = normalizeDate(film.release_date);
		newBtn.textContent = 'Watch Now';

		for (var genre of film.genres) {
			const newGenreLi = document.createElement('li');
			newGenreLi.textContent = genre;
			newGenreList.appendChild(newGenreLi);
		}


		newBox.setAttribute('class', 'box');
		newLike.setAttribute('class', 'like');
		newHeart.setAttribute('class', 'far fa-heart like-icon');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newContent.setAttribute('class', 'content');
		newTime.setAttribute('class', 'time')
		newBtn.setAttribute('class', 'btn');
		newBtn.setAttribute('href', '#');

		newContent.appendChild(newHeading);
		newContent.appendChild(newParagraph);
		newContent.appendChild(newGenreList);
		newContent.appendChild(newTime);
		newContent.appendChild(newBtn);
		newLike.appendChild(newHeart);
		newBox.appendChild(newLike);
		newBox.appendChild(newImage);
		newBox.appendChild(newContent);

		node.appendChild(newBox);film
	})
}



// Edit Genre Options on the Select
function editGenreOptions(arr, select) {
	const optionGanres = [];

	for (let film of arr) {
		for (let genre of film.genres) {
			if (!optionGanres.includes(genre)) {
				optionGanres.push(genre);
			}
		}
	}
	optionGanres.sort((a, b) => {
		if(a > b) {
			return 1;
		}
		if(a < b) {
			return -1;
		}
		return 0;
	});
	for (let option of optionGanres) {
		const newOption = document.createElement('option');
		newOption.value = option;
		newOption.textContent = option;
		select.appendChild(newOption);
	}
}
// Sort function working for Select
const sortFunctions = {
	0: (a, b) => {
		if(a.title > b.title) {
			return 1;
		}
		if(a.title < b.title) {
			return -1;
		}
		return 0;
	},
	1: (a, b) => {
		if(a.title > b.title) {
			return -1;
		}
		if(a.title < b.title) {
			return 1;
		}
		return 0;
	},
	2: (a, b) => {
		if(a.release_date > b.release_date) {
			return -1;
		}
		if(a.release_date < b.release_date) {
			return 1;
		}
		return 0;
	},

	3: (a, b) => {
		if(a.release_date > b.release_date) {
			return 1;
		}
		if(a.release_date < b.release_date) {
			return -1;
		}
		return 0;
	}
}



// All film Sort and Filter function
function filmsSortFn(evt) {
	evt.preventDefault();

	var filteredFilm = [];
	
	if (elSelect.value == 'all') {
		filteredFilm = films;
	}
	else {
		filteredFilm = films.filter(film => film.genres.includes(elSelect.value))
	}
	
	filteredFilm.sort(sortFunctions[elSelectSort.value]);
	
	elSpan.textContent = elSelect.value;

	const newRegx = new RegExp(elSearchInput.value, 'gi');
	filteredFilm = filteredFilm.filter(film => film.title.match(newRegx));
	renderFilms(filteredFilm, elBoxContent);
}