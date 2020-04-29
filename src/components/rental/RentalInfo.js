//
//
import React from 'react';

import { capitalize } from '../../helpers/functions';
import RentalAssets from './RentalAssets';

const RentalInfo = ({ rental }) => {
  return (
    <div className="rental">
      <h2 className={`rental-type type-${rental.category}`}>
        {rental.shared ? 'Shared' : 'Whole'} {rental.category}
      </h2>
      <h1 className="rental-title">{rental.title}</h1>
      <h2 className="rental-city">{capitalize(rental.city)}</h2>
      <div className="rental-room-info">
        <span>
          <i className="fa fa-building mr-1 ml-2"></i>
          {rental.numOfRooms} bedrooms
        </span>
        <span>
          <i className="fa fa-user mr-1 ml-2"></i> {rental.numOfRooms + 4}{' '}
          guests
        </span>
        <span>
          <i className="fa fa-bed mr-1 ml-2"></i> {rental.numOfRooms + 2} beds
        </span>
      </div>
      <p className="rental-description">{rental.description}</p>
      <hr />
      <RentalAssets />
    </div>
  );
};

export default RentalInfo;
