'use strict';

const readMore = document.querySelector('.readmore');
const postDescription = document.querySelector('.post-description');
const heartNormal = document.querySelector('.feed__heart-normal');
const heartActive = document.querySelector('.feed__heart-active');
const likeCount = document.querySelector('.like-description');
const postImg = document.querySelector('.post__main-img');
const heartDblClick = document.querySelector('.heart-dbl-click');


readMore.addEventListener('click', () => {
    postDescription.classList.add('desccription-open');
    postDescription.style.width = `${510}px`;
    readMore.style.display = 'none';
});

// like
heartNormal.addEventListener('click', () => {
    likeAction (heartActive, heartNormal);
});

// Nolike
heartActive.addEventListener('click', () => {
    likeAction (heartNormal, heartActive);
});

// Click Like Action
function likeAction (removeClass, addClass) {
    addClass.classList.add('invisible');
    removeClass.classList.remove('invisible');
    
    let like = 300;
    if(heartNormal.classList[2] == 'invisible') {
        like = 301;
    }
    likeCount.innerHTML = `
    <span class="like-description">
    <b>nikeman</b>님 외 ${like}명이 좋아합니다</span>`;

    removeClass.style.transform = `scale(${1.2})`;
    setTimeout(() => {
    removeClass.style.transform = `scale(${1.0})`;
    }, 100);
}

// Like click Img
postImg.addEventListener('dblclick', () => {
    likeAction (heartActive, heartNormal);

    heartDblClick.style.transform = `scale(${1.2})`;
    setTimeout(() => {
        heartDblClick.style.transform = `scale(${1.0})`;
    }, 100);
    setTimeout(() => {
        heartDblClick.style.transform = `scale(${0})`;
    }, 800);

});
