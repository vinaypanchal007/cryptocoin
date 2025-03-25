import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cryptocurrencies from './Components/Cryptocurrencies';
import News from './Components/CryptoNews';
import Learn from './Components/Learn';
import Individuals from './Components/Individuals';
import Businesses from './Components/Businesses';
import Developers from './Components/Developers';
import Company from './Components/Company';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/News" element={<News />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Individuals" element={<Individuals />} />
          <Route path="/Businesses" element={<Businesses />} />
          <Route path="/Developers" element={<Developers />} />
          <Route path="/Company" element={<Company />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
