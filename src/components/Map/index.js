import React from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

const Map = (coords) => {
  const { lat, lng } = coords.coords;

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat, lng }}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
};

export default withGoogleMap(Map);
