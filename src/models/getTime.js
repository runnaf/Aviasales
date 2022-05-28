export const timeСonversion = (date) => {
  const d = new Date(date);
  let hours = d.getUTCHours();
  let minutes = d.getUTCMinutes();
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  return [hours, minutes].join(':');
};

const timeСonversionHouresAndMinutes = (date) => {
  const d = new Date(date);
  const hours = `${d.getUTCHours()}ч`;
  const minutes = `${d.getUTCMinutes()}м`;

  return [hours, minutes].join(' ');
};

const addMinutes = (numOfMinutes, date = new Date()) => {
  const dateCopy = new Date(date.getTime());

  dateCopy.setTime(dateCopy.getTime() + numOfMinutes * 60 * 1000);

  return dateCopy;
};

const getArrivalTime = (data, duration) => {
  const dates = data;
  const date = new Date(dates);
  const minutes = duration;

  return addMinutes(minutes, date);
};

export const getDepartureTime = (data, duration) => {
  const dates = data;
  const date = new Date(dates);
  const minutes = duration;
  const dateTo = addMinutes(minutes, date);
  return timeСonversion(dateTo);
};

export const getFligthTime = (data, duration) => {
  const departureTime = new Date(data);
  const arrivalTime = getArrivalTime(data, duration);
  const fligthTime = arrivalTime - departureTime;
  const FligthTimeInHours = new Date(fligthTime);

  return timeСonversionHouresAndMinutes(FligthTimeInHours);
};
