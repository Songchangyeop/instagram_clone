'use strict';
const uproadBtn = document.querySelector('.uproad');
const comment = document.querySelector('.input-comment');
let commentItems = [];
const newItems = commentItems;

comment.addEventListener('keypress', (event) => {
	console.log('??');
	if (event.key === 'Enter') {
		let currentValue = comment.value;
		createElement(currentValue);
		comment.value = '';
	}
});

uproadBtn.addEventListener('click', () => {
	let currentValue = comment.value;
	createElement(currentValue);
	comment.value = '';
});

function saveElement() {
	localStorage.setItem('commentItems', JSON.stringify(newItems));
}

const commentList = document.querySelector('.feed__comment-list');

function createElement(value) {
	const newId = commentItems.length + 1;
	let commentItem = document.createElement('li');
	commentItem.classList.add('feed__comment-item');
	commentItem.innerHTML = `
    <div class="feed__comment-left">
      <div class="comment-left__name">
        <span>waitwait0301</span>
      </div>
      <div class="comment-left__description">
        <span>${value}</span>
      </div>
    </div>
    <div class="feed__comment-heart">
      <i class="far fa-heart" style="font-size: 12px"></i>
    </div>
    `;
	commentList.appendChild(commentItem);

	const ItemObj = {
		value: value,
		id: newId,
	};
	commentItems.push(ItemObj);
	uproadBtn.classList.remove('Enter');
	saveElement(value);
}

function loadData() {
	let output = localStorage.getItem('commentItems');
	let lodedItems = JSON.parse(output);
	if (lodedItems !== null) {
		lodedItems.forEach((loadItem) => {
			createElement(loadItem.value);
		});
	}
}

loadData();

// 업로드 버튼 활성화
comment.addEventListener('click', () => {
	uproadBtn.style.opacity = '1';
});

document.addEventListener('click', (e) => {
	if (e.target !== comment) {
		uproadBtn.style.opacity = '0.5';
	}
});
