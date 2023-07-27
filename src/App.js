import { Link, Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Quotes from './components/Quotes';
import './components/Calculator.css';
import './components/Quotes.css';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navigator">
        <h1>Math Magicians</h1>
        <ul className="list-pages">
          <li><Link to="/">Home</Link></li>
          <p className="separator">|</p>
          <li><Link to="/CalculatorPage">Calculator</Link></li>
          <p className="separator">|</p>
          <li><Link to="/Quotes">Quotes</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CalculatorPage" element={<CalculatorPage />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
