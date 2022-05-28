const isEscapeKey = (evt) => evt.key === 'Escape';
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    clearMessageError();
  }
};

const addEventKeydown = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
};

const messageError = () => {
  const error = document.getElementById('error')
    .content.querySelector('.error');
  const buttonError = error.querySelector('button');
  addEventKeydown();
  buttonError.addEventListener('click', (evt) => {
    evt.preventDefault();
    error.remove();
  });
  document.body.append(error);
};

const messageNoTickets = () => {
  const NoTickets = document.getElementById('tickets-no')
    .content.querySelector('.tickets-no');
  document.body.append(NoTickets)
}

const clearMessageError = () => {
  const message = document.querySelector('.message');
  message.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const clearMessageNoTickets = () => {
  const message = document.querySelector('.message');
  message.remove();
}

export { messageError, clearMessageError, messageNoTickets, clearMessageNoTickets };
