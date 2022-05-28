// запуск JSON-Server json-server --watch db/db.json
import { messageError, messageNoTickets, clearMessageError, clearMessageNoTickets } from './message';

const TIMER_TIME = 1000;
const TIMER_TIME_ERROR = 5000;

const getData = async () => fetch('http://localhost:3000/tickets')
  .then((response) => {
    if (!response.ok) {
      if(!document.querySelector('.message')){
        messageNoTickets()
      }
      setTimeout(getData, TIMER_TIME)
    } else if(document.querySelector('.message')) {
      clearMessageNoTickets()
    }
    return response.json();
  })
  .catch(() => {
    messageError()
    setTimeout(clearMessageError, TIMER_TIME_ERROR)
  });

export { getData }
