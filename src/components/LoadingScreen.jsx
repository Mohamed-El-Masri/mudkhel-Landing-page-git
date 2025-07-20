import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/Logo.png';

// LoadingScreen specific styles
import '../styles/components/LoadingScreen.css';

const LoadingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "🔄 تهيئة النظام...",
    "📊 تحميل البيانات...", 
    "✨ تجهيز الواجهة..."
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 1000);

    return () => clearInterval(stepInterval);
  }, [steps.length]);

  return (
    <div className="loading-screen" data-theme="premium">
      {/* Premium Logo with Halo Effect */}
      <div className="loading-logo">
        <img src={Logo} alt="مُدخِل" className="brand-logo" />
      </div>

      {/* Gradient Brand Text */}
      <h1 className="loading-text">مُدخِل</h1>
      <p className="loading-subtitle">منصة مسح الفواتير الاحترافية</p>

      {/* Ultra Premium Spinner */}
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>

      {/* Animated Progress Bar */}
      <div className="loading-progress">
        <div className="progress-bar"></div>
      </div>

      {/* Dynamic Loading Steps */}
      <div className="loading-steps">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`loading-step ${index === currentStep ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
