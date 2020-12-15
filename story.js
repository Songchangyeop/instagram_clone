'use strict';

function loaddata() {
    return fetch('data.json')
        .then(response => response.json())
        .then(json => json.items);
}


const list = document.querySelector('.story__list');
const itemLength = 80;
let listWidth = 0;
function displayStoryItem(items) {
    items.forEach(item => {
        if(item.follow == 'true'){
            listWidth += itemLength;
    let listItem = document.createElement('li');
    listItem.classList.add('story__item');
    listItem.innerHTML = `
                <div class="story__item-profile">
                  <img src="${item.image}" alt="" />
                </div>
                <span>${item.name}</span>
    `;
    list.appendChild(listItem);
    }
});
    list.style.width = `${listWidth + 40}px`
}

loaddata()
.then(items => displayStoryItem(items));