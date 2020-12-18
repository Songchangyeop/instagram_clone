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
    list.style.width = `${listWidth}px`
}

loaddata()
.then(items => displayStoryItem(items));

const nextBtn = document.querySelector('.story__next-btn');
const prevBtn = document.querySelector('.story__prev-btn');
let translist = 0;
nextBtn.addEventListener('click', () => {
        translist += (itemLength * 4);
        if(listWidth - translist < 600) {
            list.style.transform = `translate(-${listWidth - 600}px)`;
            translist = listWidth - 600;
            return;
        } else {
            list.style.transform = `translate(-${translist}px)`;
        }
    
});

prevBtn.addEventListener('click', () => {
        translist -= (itemLength * 4);
        if(translist < 0) {
            list.style.transform = `translate(${0}px)`;
            translist = 0;
            return;  
        } else {
            list.style.transform = `translate(${translist}px)`;
        }
});