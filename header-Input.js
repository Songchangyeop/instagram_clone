'use strict'

const inputSearch = document.querySelector('.input-search');
const inputCancel = document.querySelector('.input-cancel');
const headerInput = document.querySelector('.header__input');
const inputBefore = document.querySelector('.header__input-before');

document.addEventListener('click', (e) => {
    if(e.target.classList[0] == 'header__input'){
        headerInput.setAttribute('placeholder', '검색');
        inputSearch.classList.remove('invisible');
        inputCancel.classList.remove('invisible');
        inputBefore.style.display = 'none';
    } else {
        headerInput.setAttribute('placeholder', '');
        inputSearch.classList.add('invisible');
        inputCancel.classList.add('invisible');
        inputBefore.style.display = 'flex';
    }
});

