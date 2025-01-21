import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Washes2016 from './pages/WASHES/Washes2016';
import Washes2017 from './pages/WASHES/Washes2017';
import Washes2018 from './pages/WASHES/Washes2018';
import Washes2019 from './pages/WASHES/Washes2019';
import Washes2020 from './pages/WASHES/Washes2020';
import Washes2021 from './pages/WASHES/Washes2021';
import Washes2022 from './pages/WASHES/Washes2022';
import Washes2023 from './pages/WASHES/Washes2023';
import Washes2024 from './pages/WASHES/Washes2024';
import Washes2025 from './pages/WASHES/Washes2025';
import EdicoesAnteriores from './pages/EdicoesAnteriores';
import DataWashes from './pages/DataWashes';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="pt-14">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/washes-2016" element={<Washes2016 />} />
          <Route path="/washes-2017" element={<Washes2017 />} />
          <Route path="/washes-2018" element={<Washes2018 />} />
          <Route path="/washes-2019" element={<Washes2019 />} />
          <Route path="/washes-2020" element={<Washes2020 />} />
          <Route path="/washes-2021" element={<Washes2021 />} />
          <Route path="/washes-2022" element={<Washes2022 />} />
          <Route path="/washes-2023" element={<Washes2023 />} />
          <Route path="/washes-2024" element={<Washes2024 />} />
          <Route path="/washes-2025" element={<Washes2025 />} />
          <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
          <Route path="/datawashes" element={<DataWashes />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;