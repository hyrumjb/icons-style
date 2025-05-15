import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Creators from './pages/Creators';
import Athletes from './pages/Athletes';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/icons/" element={<Home />} />
        <Route path="/icons/about" element={<About />} />
        <Route path="/icons/creators" element={<Creators />} />
        <Route path="/icons/athletes" element={<Athletes />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
