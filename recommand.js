'use strict'; 

function loaddata() {
    return fetch('data.json')
        .then(response => response.json())
        .then(json => json.items);
}

const recommandList = document.querySelector('.recommand__list');
function displayRecommandItem(item) {

    item.forEach(item => {
        if(item.follow == 'true'){
            return;
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
              <div class="recommand__right"><span>팔로우</span></div>
        `
        recommandList.appendChild(recommandItem);
    });
}

loaddata()
.then(item => displayRecommandItem(item));