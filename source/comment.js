'use strict';
const uproadBtn = document.querySelector('.uproad');
const comment = document.querySelector('.input-comment');
const commentList = document.querySelector('.feed__comment-list');
let commentItems = [];

comment.addEventListener('keypress', (event) => {
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
	localStorage.setItem('commentItems', JSON.stringify(commentItems));
}

function deleteToDo(event) {
	const btn = event.target;
	const action = btn.parentNode;
	const li = action.parentNode;
	commentList.removeChild(li);
	const cleanComment = commentItems.filter(function (comment) {
		return comment.id !== parseInt(li.id);
	});
	commentItems = cleanComment;
	saveElement();
}

function createElement(value) {
	const newId = commentItems.length + 1;
	const commentItem = document.createElement('li');
	const commentLeft = document.createElement('div');
	const commentLeftName = document.createElement('div');
	const commentUser = document.createElement('span');
	const commentValue = document.createElement('div');
	const commentValueText = document.createElement('span');
	const commentAction = document.createElement('div');
	const commentDelete = document.createElement('span');
	commentItem.classList.add('feed__comment-item');
	commentLeft.classList.add('feed__comment-left');
	commentLeftName.classList.add('comment-left__name');
	commentValue.classList.add('comment-left__description');
	commentDelete.classList.add('feed__comment-delete');
	commentUser.innerText = 'waitwait0301';
	commentValueText.innerText = `${value}`;
	commentDelete.innerText = '🗑';

	commentDelete.addEventListener('click', deleteToDo);

	commentItem.id = newId;

	commentAction.appendChild(commentDelete);
	commentLeftName.appendChild(commentUser);
	commentValue.appendChild(commentValueText);
	commentLeft.appendChild(commentLeftName);
	commentLeft.appendChild(commentValue);
	commentItem.appendChild(commentLeft);
	commentItem.appendChild(commentAction);
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
