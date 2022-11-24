import React from 'react';
import { useSelector } from 'react-redux';
import Earthquake from './Earthquake';

const Earthquakes = () => {
  const earthquakesList = useSelector((state) => state.earthquakes.earthquakesList);

  return (
    <div className="container">
      {earthquakesList.map((earthquake) => (
        <Earthquake
          key={earthquake.id}
          id={earthquake.id}
          title={earthquake.title}
          place={earthquake.place}
        />
      ))}
    </div>
  );
};

export default Earthquakes;
