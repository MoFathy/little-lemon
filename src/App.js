import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NoMatch />} />
      {/*<Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
export default App;
