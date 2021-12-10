// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function() {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }

// for(let i = 0; i < btnsOpenModal.length; i++){
//     btnsOpenModal[i].addEventListener('click', openModal);
// }

// const closeModal = function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

'use strict'
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal')


showModal.forEach(modal => modal.addEventListener('click', openModal)) 
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// for(let i = 0; i < showModal.length; i++) {
//     showModal[i].addEventListener('click', openModal);
// };

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);