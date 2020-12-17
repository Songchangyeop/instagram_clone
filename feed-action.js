'use strict';

const readMore = document.querySelector('.readmore');
const postDescription = document.querySelector('.post-description');
readMore.addEventListener('click', () => {
    postDescription.classList.add('desccription-open');
    postDescription.style.width = `${500}px`;
    readMore.style.display = 'none';
});

const heartNormal = document.querySelector('.feed__heart-normal');
const heartActive = document.querySelector('.feed__heart-active');
const likeCount = document.querySelector('.like-description');

heartNormal.addEventListener('click', () => {
    heartNormal.classList.add('invisible');
    heartActive.classList.remove('invisible');
    likeCount.innerHTML = `
    <span class="like-description"
                ><b>nikeman</b>님 외 ${301}명이 좋아합니다</span
              >`;

    heartActive.style.transform = `scale(${1.2})`;
    setTimeout(() => {
        heartActive.style.transform = `scale(${1.0})`;
    }, 100);
});

heartActive.addEventListener('click', () => {
    heartActive.classList.add('invisible');
    heartNormal.classList.remove('invisible');
    likeCount.innerHTML = `
    <span class="like-description"
                ><b>nikeman</b>님 외 ${300}명이 좋아합니다</span
              >`;

    heartNormal.style.transform = `scale(${1.2})`;
    setTimeout(() => {
        heartNormal.style.transform = `scale(${1.0})`;
    }, 100);
});