import Zone from './components/Zone';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Zone />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
