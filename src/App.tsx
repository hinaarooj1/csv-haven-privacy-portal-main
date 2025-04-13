
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import OurSolution from './pages/OurSolution';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import FinancialAid from './pages/FinancialAid';
import Terms from './pages/Terms';
import CGV from './pages/CGV';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CSVFiles from './pages/CSVFiles';
import CookieConsent from './components/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import IsolationRampants from './pages/IsolationRampants';
import IsolationExterieure from './pages/IsolationExterieure';
import IsolationInterieure from './pages/IsolationInterieure';
import Peinture from './pages/Peinture';
import IsolationToiture from './pages/IsolationToiture';

function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/notre-solution" element={<OurSolution />} />
        <Route path="/avis-clients" element={<Testimonials />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aides-financieres" element={<FinancialAid />} />
        <Route path="/mentions-legales" element={<Terms />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/fichiers-csv" element={<CSVFiles />} />
        
        {/* Service routes */}
        <Route path="/isolation-rampants" element={<IsolationRampants />} />
        <Route path="/isolation-exterieure" element={<IsolationExterieure />} />
        <Route path="/isolation-interieure" element={<IsolationInterieure />} />
        <Route path="/peinture" element={<Peinture />} />
        <Route path="/isolation-toiture" element={<IsolationToiture />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
