import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Visits from './pages/Visits';
import Gallery from './pages/Gallery';
import Voices from './pages/Voices';
import GetInvolved from './pages/GetInvolved';
import Media from './pages/Media';
import Upcoming from './pages/Upcoming';
import Team from './pages/Team';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/visits"       element={<Visits />} />
        <Route path="/gallery"      element={<Gallery />} />
        <Route path="/voices"       element={<Voices />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/media"        element={<Media />} />
        <Route path="/upcoming"     element={<Upcoming />} />
        <Route path="/team"         element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
