import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Earthquake from './Earthquake';
import Feature from './Feature';

const Earthquakes = () => {
  const earthquakesList = useSelector((state) => state.earthquakes);
  const featureData = useSelector((state) => state.feature);

  return (
    <>
      <div className="feature">
        <Feature
          key={featureData.generated}
          count={featureData.count}
          titleUsgs={featureData.title}
          api={featureData.api}
        />
      </div>
      <div className="earthquakeList">
        {earthquakesList.map((earthquake) => (
          <Link key={earthquake.id} to={`/detail/${earthquake.id}`}>
            <Earthquake
              key={earthquake.id}
              idEQ={earthquake.id}
              title={earthquake.properties.title}
              mag={earthquake.properties.mag}
              place={earthquake.properties.place}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Earthquakes;
