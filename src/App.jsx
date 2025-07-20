import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faFileInvoice, 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faCheckCircle,
  faCogs,
  faFileExcel,
  faUsers,
  faClock,
  faLanguage,
  faShieldAlt,
  faHeadset,
  faZap,
  faCloud,
  faInfo,
  faCalculator,
  faPaperPlane,
  faUsersCog,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

// Shared styles and utilities (no component-specific styles)
import './styles/index.css';

// Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage';

// Add icons to library
library.add(
  faFileInvoice, 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faCheckCircle,
  faCogs,
  faFileExcel,
  faUsers,
  faClock,
  faLanguage,
  faShieldAlt,
  faHeadset,
  faZap,
  faCloud,
  faInfo,
  faCalculator,
  faPaperPlane,
  faUsersCog,
  faCheck,
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
