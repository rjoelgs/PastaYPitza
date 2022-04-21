import Header from './containers/Header';
import Footer from './containers/Footer';
import MainRouter from './containers/MainRouter';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import './App.css';
import Reservation from './containers/Reservation';




function App() {
  return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<MainRouter />} />
            <Route path="about" element={<About />} />
            <Route path="reservation" element={<Reservation />} />
          </Routes>
          <Footer />
          
        </>)
}

export default App;
