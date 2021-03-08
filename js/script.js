'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]'); 

		addForm.addEventListener('submit', (event) => {
			event.preventDefault(); //отмена стандартного поведения браузера - ребут

			let newFilm = addInput.value;
			const favorite = checkbox.checked; // получаеми чекбокс булиновый (атрибут checked)
			
			if (newFilm) {						// проверка на false (если пустая строка то ничего не делать)

				if (newFilm.length > 21) {
					newFilm = `${newFilm.substring(0, 22)}...`;
				}
				movieDB.movies.push(newFilm);	
				sortArr(movieDB.movies);

				createMovieList(movieDB.movies, movieList);

			}			
			event.target.reset(); //event.target = addForm, reset = сбросить содержимое формы

		});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};
	deleteAdv(adv);

	const makeChabges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};
	makeChabges();

	const sortArr = (arr) => {
		arr.sort();
	};

	sortArr(movieDB.movies);

	movieDB.movies.sort();


	function createMovieList(films, parent) {
		parent.innerHTML = '';

		films.forEach((film, i) => {
			parent.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
		</li>
		`;
		});
	}

	createMovieList(movieDB.movies, movieList);



});