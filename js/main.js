var elSelect = document.querySelector('.select');
var elForm = document.querySelector('.form');
var elSpan = document.querySelector('.span');
var elBoxContent = document.querySelector('.box-container');

var optionGanres = [];

for (var film of films) {
	for (var ganre of film.genres) {
		if (!optionGanres.includes(ganre)) {
			optionGanres.push(ganre);
		}
	}
}
for (var option of optionGanres) {
	var newOption = document.createElement('option');
	newOption.value = option;
	newOption.textContent = option;
	elSelect.appendChild(newOption);
}

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	renderFilms(films, elBoxContent);
	elSpan.textContent = elSelect.value;
})

function renderFilms(arr, node) {
	elBoxContent.innerHTML = null;
	arr.forEach((film) => {
		if (film.genres.includes(elSelect.value)) {
			var newBox = document.createElement('div');
			var newContent = document.createElement('div');
			var newImage = document.createElement('img');
			var newHeading = document.createElement('h3');
			var newParagraph = document.createElement('p');
			var newTime = document.createElement('p');
			var newGenreList = document.createElement('ul');
			var newBtn = document.createElement('a');

			newHeading.textContent = film.title;
			newParagraph.textContent =
				film.overview.split(' ').slice(0, 25).join(' ') + '...';
			newTime.textContent = normalizeDate(film.release_date);
			newBtn.textContent = 'Watch Now';

			for (var genre of film.genres) {
				var newGenreLi = document.createElement('li');
				newGenreLi.textContent = genre;
				newGenreList.appendChild(newGenreLi);
			}


			newBox.setAttribute('class', 'box');
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
			newBox.appendChild(newImage);
			newBox.appendChild(newContent);

			node.appendChild(newBox);
		}
	});
}

