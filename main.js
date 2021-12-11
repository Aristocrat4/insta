'use strict';
const imgDiv1 = document.querySelector('.little-block-1');
const imgDiv2 = document.querySelector('.little-block-2');
const imgDiv3 = document.querySelector('.little-block-3');
const closeBg = document.querySelector('.transparent-bg');
console.log(closeBg);

imgDiv1.addEventListener('click', function() {
    closeBg.classList.remove('hidden');
})
imgDiv2.addEventListener('click', function() {
    closeBg.classList.remove('hidden');
})
imgDiv3.addEventListener('click', function() {
    closeBg.classList.remove('hidden');
})
closeBg.addEventListener('click', function() {
    closeBg.classList.add('hidden');
})