// Render Films Array

function renderFilms(arr, node) {
	elBoxContent.innerHTML = null;

	arr.forEach(film => {
		const newBox = document.createElement('div');
		const newContent = document.createElement('div');
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
	for (let option of optionGanres) {
		const newOption = document.createElement('option');
		newOption.value = option;
		newOption.textContent = option;
		select.appendChild(newOption);
	}
}