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
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
                المنصة السحابية الثورية!
                <br />
                <span className="subtitle-highlight">من الفوضى إلى التنظيم في 3 ثوانٍ فقط!</span>
              </h1>
              <p className="hero-subtitle">
                 <strong>هل تعبت من إدخال آلاف الفواتير يدوياً؟</strong> 
                <br />
                نقدم حلاً ثورياً يحول فوضى فواتيرك إلى ملفات Excel منظمة 
                بدقة 99.5% وسرعة خيالية تفوق كل التوقعات! 
                <br />
                 <em>وداعاً للكوابيس المحاسبية، مرحباً بمستقبل الذكاء الاصطناعي!</em>
              </p>
              
              <div className="hero-features">
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span> معالجة فورية خلال 3 ثوانٍ (ليس دقائق!)</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span> دقة 99.5% مضمونة مع Google Vision AI</span>
                </div>
                <div 
                  className="feature-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span> متوافق 100% مع ZATCA ومعايير الحكومة السعودية</span>
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
                  className="me-3 cta-primary"
                >
                  <FontAwesomeIcon icon={faRocket} className="me-2" />
                  جربها مجاناً الآن - لن تصدق النتيجة!
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={() => scrollToSection('solution')}
                  className="cta-secondary"
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  شاهد السحر يحدث
                </Button>
              </div>

              {/* FOMO Indicators */}
              <div className="urgency-bar" data-aos="fade-up" data-aos-delay="500">
                <div className="urgency-content">
                   <strong>عرض محدود!</strong> أول 100 عميل جديد يحصلون على 50 فاتورة مجانية!
                  <div className="urgency-timer"> متبقي: 48 ساعة فقط</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="social-proof" data-aos="fade-up" data-aos-delay="600">
                <div className="proof-item">
                  <span className="proof-number">2,500+</span>
                  <span className="proof-label">شركة تثق بنا</span>
                </div>
                <div className="proof-item">
                  <span className="proof-number">150,000+</span>
                  <span className="proof-label">فاتورة محولة اليوم</span>
                </div>
                <div className="proof-item">
                  <span className="proof-number">99.8%</span>
                  <span className="proof-label">دقة مذهلة</span>
                </div>
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
                  <div className="dashboard-title">⚡ شاهد السحر يحدث أمام عينيك!</div>
                  <div className="dashboard-subtitle">من فاتورة ورقية متهالكة إلى Excel منظم في 3 ثوانٍ!</div>
                </div>
                <div className="dashboard-content">
                  <div className="service-steps">
                    <div 
                      className="step-item magic-step"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <span>� التقط صورة أو ارفع الملف</span>
                      <div className="step-details">حتى لو كانت مجعدة أو ممزقة - نحن نقرأها!</div>
                    </div>
                    
                    <div 
                      className="step-arrow magic-arrow"
                      data-aos="fade-in"
                      data-aos-delay="300"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                      <span className="arrow-text">⚡ 3 ثوانٍ فقط</span>
                    </div>
                    
                    <div 
                      className="step-item magic-step"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FontAwesomeIcon icon={faCogs} />
                      <span>� الذكاء الاصطناعي يبدع</span>
                      <div className="step-details">Google Vision AI + التحقق البشري = دقة مذهلة</div>
                    </div>
                    
                    <div 
                      className="step-arrow magic-arrow"
                      data-aos="fade-in"
                      data-aos-delay="500"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                      <span className="arrow-text">💨 بلمح البصر</span>
                    </div>
                    
                    <div 
                      className="step-item success-step"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <FontAwesomeIcon icon={faFileExcel} />
                      <span>🎉 تحفة فنية من Excel!</span>
                      <div className="step-details">منظم، مصنف، جاهز للمحاسبة - بلا أخطاء!</div>
                    </div>
                  </div>

                  {/* Live Stats Section */}
                  <div className="live-stats" data-aos="fade-up" data-aos-delay="700">
                    <div className="stats-badge">� إحصائيات مباشرة الآن</div>
                    <div className="stats-grid">
                      <div className="stat-item">
                        <span className="stat-value live-counter">2,847</span>
                        <span className="stat-label">فاتورة معالجة اليوم</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value live-counter">3.2</span>
                        <span className="stat-label">ثانية متوسط المعالجة</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value live-counter">147</span>
                        <span className="stat-label">عميل جديد هذا الأسبوع</span>
                      </div>
                    </div>
                    <div className="testimonial-preview">
                      💬 "لا أصدق كم وفرت علي من الوقت!" - سارة أحمد
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
