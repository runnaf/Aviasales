import { timeСonversion, getFligthTime, getDepartureTime } from './getTime';
import { getTransfer } from './transfer';
import { getData } from './getData';

const rengerSimilarTickets = (tickets) => {
  const offerElement = document.querySelector('.tickets__list');
  offerElement.innerHTML = '';

  tickets.forEach((ticketsItem) => {
    offerElement.insertAdjacentHTML('beforeend', `
      <li class="tickets__item">
        <a class="tickets__link" href="#">
          <p class="tickets__price">${ticketsItem.price.toLocaleString()} Р</p>
          <img src="http://pics.avs.io/99/36/${ticketsItem.carrier}.png" alt="авиакомпания" width="110" height="36">
          <div class="tickets__data-from">
            <dl class="tickets__data-list">
              <div>
                <dt class="tickets__item-term tickets__airport-from">${ticketsItem.segments[0].origin} - ${ticketsItem.segments[0].destination}</dt>
                <dd class="tickets__item-desc tickets__departure-time-from">${timeСonversion(ticketsItem.segments[0].date)} – ${getDepartureTime(ticketsItem.segments[0].date, ticketsItem.segments[0].duration)}</dd>
              </div>
              <div>
                <dt class="tickets__item-term">В пути</dt>
                <dd class="tickets__item-desc tickets__time-fligth">${getFligthTime(ticketsItem.segments[0].date, ticketsItem.segments[0].duration)}</dd>
              </div>
              <div>
                <dt class="tickets__item-term tickets__transfer-to">${getTransfer(ticketsItem.segments[0].stops)}</dt>
                <dd class="tickets__item-desc airport-of-transfer-from">${ticketsItem.segments[0].stops.join(', ')}</dd>
              </div>
            </dl>
          </div>
          <div class="tickets__data-to">
            <dl class="tickets__data-list">
              <div>
                <dt class="tickets__item-term tickets__airport-from">${ticketsItem.segments[1].origin} - ${ticketsItem.segments[1].destination}</dt>
                <dd class="tickets__item-desc tickets__departure-time-from">${timeСonversion(ticketsItem.segments[1].date)} – ${getDepartureTime(ticketsItem.segments[1].date, ticketsItem.segments[1].duration)}</dd>
              </div>
              <div>
                <dt class="tickets__item-term">В пути</dt>
                <dd class="tickets__item-desc tickets__time-fligth">${getFligthTime(ticketsItem.segments[1].date, ticketsItem.segments[1].duration)}</dd>
              </div>
              <div>
                <dt class="tickets__item-term tickets__transfer-to">${getTransfer(ticketsItem.segments[1].stops)}</dt>
                <dd class="tickets__item-desc airport-of-transfer-from">${ticketsItem.segments[1].stops.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </a>
      </li>
    `);
  });
};

getData()
  .then((data) => data = data.slice(0, 5))
  .then((data) => { rengerSimilarTickets(data); });

export { rengerSimilarTickets };
