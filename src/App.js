// import logo from './logo.svg';
import './App.css';
import { Index } from './Pages/Home';
import {Joinus} from './Pages/Joinus'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Index />} />
         <Route exact path="/joinus" element={<Joinus />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
