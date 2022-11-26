import logoUsgs from '../images/usgs_logo.svg';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header>
      <div className="header">
        <a href="/"><img src={logoUsgs} alt="USGS" /></a>
        <div>
          <h1 className="header__h1">Earthquakes</h1>
          <h4 className="header__h4">real-time</h4>
        </div>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
