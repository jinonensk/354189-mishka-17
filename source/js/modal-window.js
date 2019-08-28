const orderButton = document.querySelector('.popular-item__button');
const modal = document.querySelector('.size-layout');
let orderButtons;

if (orderButton) {
  orderButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('size-layout--show');
  })
} else {
  orderButtons = [].slice.call(document.querySelectorAll('.product__button'),0);
  orderButtons.forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('size-layout--show');
    });
  });
};

modal.addEventListener('click', function(evt) {
  if (evt.target.className === 'size-layout size-layout--show') {
    evt.preventDefault();
    modal.classList.remove('size-layout--show');
  }
})

window.addEventListener('keydown', function(evt) {
  if (modal.classList.contains('size-layout--show')) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.remove('size-layout--show');
    };
  };
});
