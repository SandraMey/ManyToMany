import Zone from './components/Zone';
import Header from './components/Header';
import Work from './components/Work';
import Deepening from './components/Deepening';
import Budget from './components/Budget';
import Level from './components/Level';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Zone />} />
        <Route path="/work" element={<Work />} />
        <Route path="/deepening" element={<Deepening />} />
        <Route path="/level" element={<Level />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/products" element={<products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
