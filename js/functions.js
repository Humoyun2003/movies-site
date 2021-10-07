// Render Films Array
function renderFilms(arr, node) {
	elBoxContent.innerHTML = null;

	arr.forEach(film => {
		const newBox = document.createElement('div');
		const newContent = document.createElement('div');
		const newLike = document.createElement('div');
		const newDownload = document.createElement('a');
		const newHeart = document.createElement('i');
		const newDownloadIcon = document.createElement('i');
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
		newDownload.setAttribute('class', 'download');
		newDownload.setAttribute('href', film.poster);
		newDownload.setAttribute('target', 'blank');
		newHeart.setAttribute('class', 'far fa-heart like-icon');
		newDownloadIcon.setAttribute('class', 'fas fa-download download-icon');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newContent.setAttribute('class', 'content');
		newTime.setAttribute('class', 'time')
		newBtn.setAttribute('class', 'btn');
		newBtn.setAttribute('href', film.poster);
		newBtn.setAttribute('target', 'blank');

		newHeart.dataset.filmId = film.id;

		if (film.to_like) {
			newHeart.classList.toggle('fas');
		}

		// newBox.dataset.id = film.id;

		newContent.appendChild(newHeading);
		newContent.appendChild(newParagraph);
		newContent.appendChild(newGenreList);
		newContent.appendChild(newTime);
		newContent.appendChild(newBtn);
		newLike.appendChild(newHeart);
		newDownload.appendChild(newDownloadIcon);
		newBox.appendChild(newLike);
		newBox.appendChild(newImage);
		newBox.appendChild(newContent);
		newBox.appendChild(newDownload);

		node.appendChild(newBox);
	})
};



// Scroll To Top functions
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
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
		if (a > b) {
			return 1;
		}
		if (a < b) {
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
		if (a.title > b.title) {
			return 1;
		}
		if (a.title < b.title) {
			return -1;
		}
		return 0;
	},
	1: (a, b) => {
		if (a.title > b.title) {
			return -1;
		}
		if (a.title < b.title) {
			return 1;
		}
		return 0;
	},
	2: (a, b) => {
		if (a.release_date > b.release_date) {
			return -1;
		}
		if (a.release_date < b.release_date) {
			return 1;
		}
		return 0;
	},

	3: (a, b) => {
		if (a.release_date > b.release_date) {
			return 1;
		}
		if (a.release_date < b.release_date) {
			return -1;
		}
		return 0;
	}
}



// All film Sort and Filter function
function filmsSortFn(evt) {
	evt.preventDefault();

	if(elSelect.value != 'all') {
		filteredFilm = films.filter(film => film.genres.includes(elSelect.value))
	}
	else {
		filteredFilm = films;
	}
	
	filteredFilm.sort(sortFunctions[elSelectSort.value]);
	
	elSpan.textContent = elSelect.value;

	const newRegx = new RegExp(elSearchInput.value, 'gi');
	filteredFilm = filteredFilm.filter(film => film.title.match(newRegx));
	renderFilms(filteredFilm, elBoxContent);
}




function filmsSortLiked(evt) {
	if (evt.target.matches('.like-icon')) {
		const iconId = Number(evt.target.dataset.filmId);

		const foundLike = films.find((film) => film.id === iconId);

		foundLike.to_like = !foundLike.to_like;

		renderFilms(filteredFilm, elBoxContent);
	}
}