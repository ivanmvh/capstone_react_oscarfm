import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DetailQuake from './components/DetailQuake';
import Earthquakes from './components/Earthquakes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Earthquakes />} />
          <Route path="/detail/:id" element={<DetailQuake />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
