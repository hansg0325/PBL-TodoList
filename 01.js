const $ul = document.querySelector('ul');
const $input = document.querySelector('#input');

$input.addEventListener('keyup', (e) => {
  if (e.key !== 'Enter') return;

  $newLi = document.createElement('li');
  $newLi.textContent = e.target.value;
  $ul.appendChild($newLi);

  e.target.value = '';
});