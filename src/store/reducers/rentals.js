//
//

const rentals = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    case 'CREATE_RENTAL':
      return [...state, action.rental];
    default:
      return state;
  }

  //   if (action.type === 'FETCH_RENTALS') {
  //     return action.rentals;
  //   } else if (action.type === 'CREATE_RENTAL') {
  //     return [...state, action.rental];
  //   } else {
  //     return state;
  //   }
  // };
};

export default rentals;
