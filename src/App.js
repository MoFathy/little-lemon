import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';
import {Reservation} from './pages/Reservation';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
          <Route path="*" element={<NoMatch />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
  );
}
export default App;
