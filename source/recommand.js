'use strict';

function loaddata() {
	return fetch('data.json')
		.then((response) => response.json())
		.then((json) => json.items);
}

const recommandList = document.querySelector('.recommand__list');
function displayRecommandItem(item) {
	let i = 0;
	item.forEach((item) => {
		if (item.follow == 'true') {
			return;
		} else {
			i++;
		}
		let recommandItem = document.createElement('li');
		recommandItem.classList.add('recommand__item');
		recommandItem.innerHTML = `
        <div class="recommand__left">
                <div class="recommand__item-img">
                  <img class="recommand__img" src="${item.image}" alt="${item.name}" />
                </div>
                <div class="recommand__profile">
                  <div class="recommand__profile-name"><span>${item.name}</span></div>
                  <div class="recommand__profile-description">
                    <span>${item.status}</span>
                  </div>
                </div>
              </div>
              <div class="recommand__right" data-id ="${i}"><span class="follow">팔로우</span></div>
        `;
		recommandList.appendChild(recommandItem);
	});
}

recommandList.addEventListener('click', (e) => {
	const follow = document.querySelectorAll('.recommand__right');
	const target = e.target;

	if (target.parentNode.classList[0] == 'recommand__right') {
		switch (target.parentNode.dataset.id) {
			case '1':
				toggleFollow(0, follow);
				break;
			case '2':
				toggleFollow(1, follow);
				break;
			case '3':
				toggleFollow(2, follow);
				break;
			case '4':
				toggleFollow(3, follow);
				break;
		}
	}
});

function toggleFollow(data, follow) {
	if (follow[data].childNodes[0].classList[0] == 'follow') {
		follow[data].innerHTML = `<span class="following">팔로잉</span>`;
	} else {
		follow[data].innerHTML = `<span class="follow">팔로우</span>`;
	}
}

loaddata().then((item) => displayRecommandItem(item));
