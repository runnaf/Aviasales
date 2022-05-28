const getTransfer = (property) => {
  if (property.length === 0) {
    return 'без пересадок';
  } if (property.length === 1) {
    return '1 пересадка';
  } return `${property.length} пересадки`;
};

export {getTransfer}
