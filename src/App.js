import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
