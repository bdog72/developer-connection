//
//
import React from 'react';

const RentalAssets = () => {
  return (
    <div className="rental-assets">
      <h3 className="title">Assets</h3>
      <div className="row">
        <div className="col-md-6">
          <span>
            <i className="fa fa-asterisk mr-1 ml-1"></i> Cooling
          </span>
          <span>
            <i className="fa fa-thermometer mr-1 ml-2"></i> Heating
          </span>
          <span>
            <i className="fa fa-location-arrow mr-1 ml-2"></i> Iron
          </span>
        </div>
        <div className="col-md-6">
          <span>
            <i className="fa fa-desktop mr-1 ml-2"></i> Working area
          </span>
          <span>
            <i className="fa fa-cube mr-1 ml-2"></i> Washing machine
          </span>
          <span>
            <i className="fa fa-cube mr-1 ml-2"></i> Dishwasher
          </span>
        </div>
      </div>
    </div>
  );
};

export default RentalAssets;
