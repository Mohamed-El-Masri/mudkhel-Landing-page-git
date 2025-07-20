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
                <span className="title-highlight">حوّل أي فاتورة إلى Excel</span>
                <br />
                في 30 ثانية بدقة 99.9% 
              </h1>
              <p className="hero-subtitle">
                <strong>لا مزيد من الإدخال اليدوي!</strong> ارفع صورة أو PDF لأي فاتورة (مبيعات، مشتريات، إيصالات) 
                ودع الذكاء الاصطناعي المتقدم يحوّلها إلى ملف Excel منسق بالكامل مع تصنيف البيانات تلقائياً.
                <br /><em>✨ يدعم الفواتير العربية والإنجليزية • لا يحفظ بياناتك • نتائج فورية</em>
              </p>
              
              <div className="hero-features">
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span><strong>OCR متقدم:</strong> يقرأ أصعب الخطوط والفواتير المعقدة</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span><strong>ذكاء اصطناعي:</strong> يفهم السياق ويصنف البيانات تلقائياً</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span><strong>أمان مطلق:</strong> تشفير كامل + حذف تلقائي فوري</span>
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
                  جرّب الخدمة الآن
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={() => scrollToSection('solution')}
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  كيف تعمل؟
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
                  <div className="dashboard-title">🤖 منصة مُدخِل الذكية - تحويل فوري</div>
                </div>
                <div className="dashboard-content">
                  <div className="service-steps">
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span><strong>1. ارفع الفاتورة</strong><br />PDF، JPG، PNG</span>
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
                      <span><strong>2. مسح ذكي</strong><br />OCR + AI معالجة</span>
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
                      <span><strong>3. تحميل Excel</strong><br />منسق ومصنف تلقائياً</span>
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
