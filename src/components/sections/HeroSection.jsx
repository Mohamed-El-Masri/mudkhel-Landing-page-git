import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// HeroSection specific styles
import '../../styles/sections/HeroSection.css';

import { 
  faCheckCircle,
  faRocket,
  faEye,
  faCamera,
  faFileInvoice,
  faTable,
  faShield,
  faCloud,
  faMagic,
  faArrowRight,
  faStar,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-patterns"></div>
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}>
              <FontAwesomeIcon 
                icon={[faCamera, faFileInvoice, faTable, faShield, faCloud, faMagic, faStar, faLightbulb][i]} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Title Outside Container */}
      <div className="hero-title-wrapper">
        <Container fluid>
          <h1 className="hero-title-fullwidth">
            <span className="title-highlight">حوّل أي فاتورة</span>
            <br />
            إلى <span className="title-excel">Excel</span> في 
            <span className="title-time"> 15 ثانية</span>
            <br />
            <span className="title-accuracy">بدقة احترافية</span>
          </h1>
        </Container>
      </div>

      <Container className="hero-container">
        <Row className="align-items-center min-vh-100 position-relative">
          <Col lg={6} className="hero-content-col">
            <div 
              className={`hero-content ${isVisible ? 'visible' : ''}`}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* Premium Badge */}
              <div className="hero-badge" data-aos="fade-down" data-aos-delay="100">
                <FontAwesomeIcon icon={faStar} className="badge-icon" />
                <span>أول منصة ذكية لمسح الفواتير في المنطقة</span>
              </div>

              {/* Enhanced Subtitle */}
              <div className="hero-subtitle-wrapper">
                <p className="hero-subtitle">
                  <strong className="subtitle-highlight">أنقذ فواتيرك من الضياع، وودّع الإدخال اليدوي!</strong>
                  <br />
                  باستخدام <span className="brand-highlight">"مُدخِل"</span> – منصتك الذكية لمسح وتصنيف الفواتير والإيصالات تلقائيًا، بدقة واحترافية.
                </p>
                
                {/* Quick Features Pills */}
                <div className="quick-features">
                  <span className="feature-pill">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    عربي + إنجليزي
                  </span>
                  <span className="feature-pill">
                    <FontAwesomeIcon icon={faCloud} />
                    تخزين سحابي آمن
                  </span>
                  <span className="feature-pill">
                    <FontAwesomeIcon icon={faMagic} />
                    نتائج فورية
                  </span>
                </div>
              </div>
              
              {/* Enhanced Features List */}
              <div className="hero-features">
                <div 
                  className="feature-item premium"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="hero-feature-icon">
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                  <div className="feature-content">
                    <strong>OCR متقدم:</strong>
                    <span>يقرأ أصعب الخطوط والفواتير المعقدة</span>
                  </div>
                </div>
                
                <div 
                  className="feature-item premium"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="hero-feature-icon">
                    <FontAwesomeIcon icon={faTable} />
                  </div>
                  <div className="feature-content">
                    <strong>تصنيف ذكي:</strong>
                    <span>حسب النوع، المشروع أو التاريخ</span>
                  </div>
                </div>
                
                <div 
                  className="feature-item premium"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="hero-feature-icon">
                    <FontAwesomeIcon icon={faShield} />
                  </div>
                  <div className="feature-content">
                    <strong>أمان مطلق:</strong>
                    <span>تشفير كامل + حفظ لمدة 5 سنوات</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div 
                className="hero-actions"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary-hero"
                >
                  <div className="btn-content">
                    <FontAwesomeIcon icon={faRocket} className="btn-icon" />
                    <span>جرّب الخدمة الآن</span>
                    <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                  </div>
                  <div className="btn-shine"></div>
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg"
                  onClick={() => scrollToSection('problem')}
                  className="btn-secondary-hero"
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  كيف تعمل؟
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="trust-indicators" data-aos="fade-up" data-aos-delay="600">
                <div className="trust-item">
                  <span className="trust-number">+50</span>
                  <span className="trust-label">شركة تثق بنا</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-number">98%</span>
                  <span className="trust-label">دقة الاستخراج</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-number">+10K</span>
                  <span className="trust-label">فاتورة معالجة</span>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="hero-visual-col">
            <div 
              className="hero-visual"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Enhanced Hero Graphic */}
              <div className="hero-graphic-container">
                <div className="hero-graphic">
                  {/* Main Visual Elements */}
                  <div className="graphic-center">
                    <div className="center-logo">
                      <div className="logo-glow"></div>
                      <span className="logo-text">مُدخِل</span>
                      <div className="logo-subtitle">مسح ذكي للفواتير</div>
                    </div>
                  </div>

                  {/* Floating Document Icons */}
                  <div className="floating-docs">
                    <div className="doc-item doc-1">
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span>فاتورة</span>
                    </div>
                    <div className="doc-item doc-2">
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span>إيصال</span>
                    </div>
                    <div className="doc-item doc-3">
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span>سند</span>
                    </div>
                  </div>

                  {/* Processing Animation */}
                  <div className="process-flow">
                    <div className="flow-step step-1">
                      <FontAwesomeIcon icon={faCamera} />
                      <span>مسح</span>
                    </div>
                    <div className="flow-arrow arrow-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="flow-step step-2">
                      <FontAwesomeIcon icon={faMagic} />
                      <span>معالجة</span>
                    </div>
                    <div className="flow-arrow arrow-2">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="flow-step step-3">
                      <FontAwesomeIcon icon={faTable} />
                      <span>Excel</span>
                    </div>
                  </div>

                  {/* Feature Orbits */}
                  <div className="feature-orbits">
                    <div className="orbit orbit-1">
                      <div className="orbit-item">
                        <FontAwesomeIcon icon={faShield} />
                      </div>
                    </div>
                    <div className="orbit orbit-2">
                      <div className="orbit-item">
                        <FontAwesomeIcon icon={faCloud} />
                      </div>
                    </div>
                    <div className="orbit orbit-3">
                      <div className="orbit-item">
                        <FontAwesomeIcon icon={faLightbulb} />
                      </div>
                    </div>
                  </div>

                  {/* Background Elements */}
                  <div className="graphic-bg">
                    <div className="bg-circle circle-1"></div>
                    <div className="bg-circle circle-2"></div>
                    <div className="bg-circle circle-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
