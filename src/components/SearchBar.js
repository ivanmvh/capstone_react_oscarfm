import goSearch from '../images/goSearch.svg';

function SearchBar() {
  return (
    <div className="form_container">
      <div className="titleApp">
        <h1 className="titleH1">Earthquakes of the last 3 days</h1>
        <img src={goSearch} alt="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
