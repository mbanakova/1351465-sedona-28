let form = document.querySelector('.booking-form');
let button = document.querySelector('.booking-button');

button.onclick = function() {
  form.classList.remove('show');
  form.classList.add('hide');
};