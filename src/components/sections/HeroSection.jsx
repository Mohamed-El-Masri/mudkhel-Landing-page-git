import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// HeroSection specific styles
import '../../styles/sections/HeroSection.css';

import { 
  faCheckCircle,
  faFileInvoice,
  faCogs,
  faFileExcel,
  faArrowDown,
  faRocket,
  faEye
} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div 
              className="hero-content"
              data-aos="fade-right"
            >
              <h1 className="hero-title">
                <span className="title-highlight">مُدخِل</span>
                <br />
                خدمة مسح الفواتير الاحترافية
              </h1>
              <p className="hero-subtitle">
                وداعاً للفواتير اليدوية، ومرحباً بمستقبل الذكاء في الإدخال. 
                نقدم خدمة مسح وإدخال الفواتير احترافياً لتوفير وقتك وجهدك.
              </p>
              
              <div className="hero-features">
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>فريق متخصص في المحاسبة</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>دقة عالية في الإدخال</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>تسليم سريع وموثوق</span>
                </div>
              </div>
              
              <div 
                className="hero-actions"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="me-3"
                >
                  <FontAwesomeIcon icon={faRocket} className="me-2" />
                  تواصل معنا الآن
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={() => scrollToSection('solution')}
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  اعرف المزيد
                </Button>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div 
              className="hero-visual"
              data-aos="fade-left"
            >
              <div className="hero-dashboard">
                <div className="dashboard-header">
                  <div className="dashboard-title">خدمة مُدخِل الاحترافية</div>
                </div>
                <div className="dashboard-content">
                  <div className="service-steps">
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span>أرسل لنا فواتيرك</span>
                    </div>
                    
                    <div 
                      className="step-arrow"
                      data-aos="fade-in"
                      data-aos-delay="300"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FontAwesomeIcon icon={faCogs} />
                      <span>نقوم بالمعالجة</span>
                    </div>
                    
                    <div 
                      className="step-arrow"
                      data-aos="fade-in"
                      data-aos-delay="500"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <FontAwesomeIcon icon={faFileExcel} />
                      <span>تستلم ملف Excel جاهز</span>
                    </div>
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
