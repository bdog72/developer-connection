//
//
import React, { useEffect, useCallback, useRef } from 'react';
import './TomMap.scss';

import { useMap } from '../../providers/MapProvider';

const TomMap = ({ location }) => {
  let map = useRef(null);
  const {
    initMap,
    getGeoPosition,
    setCenter,
    addMarker,
    addPopUpMessage,
  } = useMap();

  const getGeoLocation = useCallback(
    (location) => {
      location &&
        getGeoPosition(location)
          .then((position) => {
            setCenter(map.current, position);
            addMarker(map.current, position);
          })
          .catch((error) => {
            addPopUpMessage(map.current, error);
          });
    },
    [map, setCenter, addMarker, addPopUpMessage, getGeoPosition]
  );

  useEffect(() => {
    getGeoLocation(location);
  }, [location, getGeoLocation]);

  useEffect(() => {
    map.current = initMap();
  }, [initMap]);

  return <div id="bwm-map"></div>;
};

export default TomMap;
