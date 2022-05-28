import { getData } from './getData';
import { rengerSimilarTickets } from './rengerTickets';

const filterByAscendingPrice = (a, b) => {
  if (a.price < b.price) return -1;
};

const filteringInDescendingOrder = (a, b) => {
  if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) return -1;
};

const filterSheapest = () => {
  const ticketsCheapest = document.querySelector('#cheapest');
  ticketsCheapest.addEventListener('change', (evt) => {
    evt.preventDefault;

    getData().then((data) => data.sort(filterByAscendingPrice)).then((data) => data.slice(0, 5)).then((data) => rengerSimilarTickets(data));
  });
};

const filterFastest = () => {
  const ticketsFastest = document.querySelector('#fastest');
  ticketsFastest.addEventListener('change', (evt) => {
    evt.preventDefault;
    getData().then((data) => data.sort(filteringInDescendingOrder)).then((data) => data.slice(0, 5)).then((data) => { rengerSimilarTickets(data); });
  });
};

export { filterSheapest, filterFastest };
