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
        searchUser.classList.remove('invisible');
        inputBefore.style.display = 'none';
    } else {
        headerInput.setAttribute('placeholder', '');
        inputSearch.classList.add('invisible');
        inputCancel.classList.add('invisible');
        searchUser.classList.add('invisible');
        inputBefore.style.display = 'flex';
        while (searchUser.firstChild) {
            searchUser.removeChild(searchUser.firstChild);
        }
    }
});


let inputIntems = [];



const searchUser = document.querySelector('.header__userinfo');
function displaySearchItem(items) {
    while (searchUser.firstChild) {
        searchUser.removeChild(searchUser.firstChild);
    }
    items.forEach(item => {     
    let searchItem = document.createElement('li');
    searchItem.classList.add('header__userinfo-item');
    searchItem.innerHTML = `
    <div class="userinfo-prifile-img">
        <img class="prifile-img" src="${item.image}" alt="" />
    </div>
    <div class="userinfo-profile-right">
        <span class="profile-name">${item.name}</span>
        <span class="profile-description">${item.description}</span>
    </div>
    `;
    searchUser.appendChild(searchItem);
});
}

function renderSearchItem(items) {
    const searchText = headerInput.value;
    let filteredUsers = items.filter((item) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())
         || item.description.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    })
    displaySearchItem(filteredUsers)
}



function loaddata() {
    return fetch('data.json')
        .then(response => response.json())
        .then(json => json.items);
}

loaddata()
.then(items => inputIntems = items);

headerInput.addEventListener('keyup', () => renderSearchItem(inputIntems));