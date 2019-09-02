const orderButton = document.querySelector('.popular-item__button');
const modal = document.querySelector('.size-layout');
let orderButtons = [].slice.call(document.querySelectorAll('.product__button'),0);

if (orderButton || orderButtons.length !== 0) {
  if (orderButton) {
    orderButton.addEventListener('click', evt => {
      evt.preventDefault();
      modal.classList.add('size-layout--show');
    })
  } else {
    orderButtons.forEach(item => {
      item.addEventListener('click', evt => {
        evt.preventDefault();
        modal.classList.add('size-layout--show');
      });
    });
  };

  modal.addEventListener('click', evt => {
    if (evt.target.className === 'size-layout size-layout--show') {
      evt.preventDefault();
      modal.classList.remove('size-layout--show');
    }
  })

  window.addEventListener('keydown', evt => {
    if (modal.classList.contains('size-layout--show')) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        modal.classList.remove('size-layout--show');
      };
    };
  });
};
