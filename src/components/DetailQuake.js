import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function DetailQuake() {
  const earthquakesList = useSelector((state) => state.earthquakes);
  const params = useParams();
  const selectQuake = earthquakesList.filter((quake) => quake.id.toString() === params.id);
  const {
    url, place, type, mag, title, time,
  } = selectQuake[0].properties;
  const { coordinates } = selectQuake[0].geometry;
  return (
    <>
      <div className="itemSel__container">
        <div className="itemSel__selected">
          <div className="itemSel__data">
            <div className="itemSel__mag">
              <div className="itemSel__num">{mag}</div>
              <div className="itemSel__text">Magnitude</div>
            </div>
            <div className="itemSel__data__item">
              <h1 className="itemSel__title">
                {title}
              </h1>
              <div className="itemSel__line">{ `Place: ${place}`}</div>
              <div className="itemSel__line">{ `Type: ${type}`}</div>
              <div className="itemSel__line">{ `Coordinates: ${coordinates}`}</div>
              <div className="itemSel__btn"><a href={url} target="_blank" className="itemSel__link" rel="noreferrer">More information</a></div>
            </div>
          </div>
          <div className="itemSel__date">
            { `Date: ${new Date(time)}` }
          </div>
        </div>
        <Link className="returnBtn" to="/">return</Link>
      </div>
    </>
  );
}

export default DetailQuake;
