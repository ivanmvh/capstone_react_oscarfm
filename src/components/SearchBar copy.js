import goSearch from '../images/goSearch.svg';

function SearchBar() {
  return (
    <div className="form_container">
      <form className="form">
        <div className="form__dates">
          <div className="form__input">
            <label htmlFor="startDate">
              Start Date:
              <input className="form__date" type="date" name="start" id="startDate" />
            </label>
          </div>
          <div className="form__input">
            <label htmlFor="endDate">
              End Date:
              <input className="form__date" type="date" name="end" id="endDate" />
            </label>
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="magnitude">
            Magn.:
            <input
              className="form__magnitude"
              type="number"
              name="magnitude"
              id="magnitude"
              step="0.01"
              min="0.00"
              placeholder="5.00"
              defaultValue="5.00"
            />
          </label>
        </div>
        <button className="form__btn" type="submit">
          <img src={goSearch} alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
