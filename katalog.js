let buttons = document.querySelectorAll('button');
let lists = document.querySelectorAll('.listPoint');
let lis = document.querySelectorAll('li');
let list = document.querySelector('.categoriess');
let cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('active');
    button.classList.toggle('up');
  })
})


list.addEventListener('click', event => {
  const targetId = event.target.dataset.id;
  cards.forEach(card => {
    if (card.classList.contains(targetId)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  });
})