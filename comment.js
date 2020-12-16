'use strict';

const comment = document.querySelector('.input-comment');

comment.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        console.log('input!!')
        console.log(comment.value)
        comment.value = '';
    }
});