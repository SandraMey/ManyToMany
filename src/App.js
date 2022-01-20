import Zone from './components/Zone/Zone';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Deepening from './components/Deepening/Deepening';
import Budget from './components/Budget/Budget';
import Level from './components/Level/Level';
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
