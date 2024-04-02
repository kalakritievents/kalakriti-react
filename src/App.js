// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ArtEvent from './components/ArtEvent';
import MehndiEvent from './components/MehndiEvent';
import RangoliEvent from './components/RangoliEvent';
import PhotographyEvent from './components/PhotographyEvent';
import DanceEvent from './components/DanceEvent';
import SingingEvent from './components/SingingEvent';
// import NotFoundPage from './components/NotFoundPage';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this path matches your directory structure
import ArtWork from './components/ArtWork';
import MehndiWork from './components/MehndiWork';
import RangoliWork from './components/RangoliWork';
import PhotoWork from './components/PhotoWork';
import ArtPaymentGateway from './components/ArtPaymentGateway';
import MehndiPaymentGateway from './components/MehndiPaymentGateway';
import RangoliPaymentGateway from './components/RangoliPaymentGateway';
import PhotographyPaymentGateway from './components/PhotographyPaymentGateway';
import DancePaymentGateway from './components/DancePaymentGateway';
import SingingPaymentGateway from './components/SingingPaymentGateway';
import ArtPaymentStep from './components/ArtPaymentStep';
import MehndiPaymentStep from './components/MehndiPaymentStep';
import RangoliPaymentStep from './components/RangoliPaymentStep';
import PhotographyPaymentStep from './components/PhotographyPaymentStep';
import DancePaymentStep from './components/DancePaymentStep';
import SingingPaymentStep from './components/SingingPaymentStep'; 
import ResultPage from './components/Result';
import About from './components/About';
import TnC from './components/TnC';
import Privacy from './components/Privacy';
import Register from './components/register';
// import Contact from './components/Contact';
// import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/art" element={<ArtEvent />} />
        <Route path="/artwork" element={<ArtWork />} />
        <Route path="/mehndiwork" element={<MehndiWork />} />
        <Route path="/RangoliWork" element={<RangoliWork />} />
        <Route path="/PhotoWork" element={<PhotoWork />} />
        <Route path="/mehndi" element={<MehndiEvent />} />
        <Route path="/rangoli" element={<RangoliEvent />} />
        <Route path="/photography" element={<PhotographyEvent />} />
        <Route path="/dance" element={<DanceEvent />} />
        <Route path="/singing" element={<SingingEvent />} />
        {/* <Route path="/PaymentStep" element={<PaymentStep />} /> */}
        <Route path="/ArtPaymentGateway" element={<ArtPaymentGateway />} />
        <Route path="/MehndiPaymentGateway" element={<MehndiPaymentGateway />} />
        <Route path="/RangoliPaymentGateway" element={<RangoliPaymentGateway />} />
        <Route path="/PhotographyPaymentGateway" element={<PhotographyPaymentGateway />} />
        <Route path="/DancePaymentGateway" element={<DancePaymentGateway />} />
        <Route path="/SingingPaymentGateway" element={<SingingPaymentGateway />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ArtRegister" element={<ArtPaymentStep />} />
        <Route path="/MehndiRegister" element={<MehndiPaymentStep />} />
        <Route path="/RangoliRegister" element={<RangoliPaymentStep />} />
        <Route path="/PhotographyRegister" element={<PhotographyPaymentStep />} />
        <Route path="/DanceRegister" element={<DancePaymentStep />} />
        <Route path="/SingingRegister" element={<SingingPaymentStep />} />
        <Route path="/result" element={<ResultPage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/TnC" element={<TnC/>} />
        <Route path="/Privacy" element={<Privacy/>} />
        {/* <Route path="/Contact" element={<Contact/>} /> */}

        {/* <Route path="/singing" element={<SingingEvent />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
