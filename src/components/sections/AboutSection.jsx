import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice,
  faShieldAlt,
  faClock,
  faUsers,
  faCheckCircle,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

// AboutSection specific styles
import '../../styles/sections/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileInvoice} className="title-icon" />
            نحن مُدخِل
          </h2>
          <p className="section-subtitle">
            منصة متقدمة لمسح الفواتير بالذكاء الاصطناعي وتحويلها إلى بيانات منظمة بدقة احترافية
          </p>
        </div>

        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="about-content">
              <h3>
                <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                خبرة تقنية متطورة في مسح الفواتير
              </h3>
              <p>
                نختص في تقديم حلول مسح الفواتير الاحترافية باستخدام تقنية OCR المتطورة والذكاء الاصطناعي. 
                نحول فواتيرك الورقية والرقمية إلى بيانات منظمة بدقة تفوق 99.5%.
              </p>
              <p>
                <strong>التقنية المتقدمة:</strong> نستخدم Google Vision AI مع خوارزميات مخصصة 
                لقراءة الفواتير باللغتين العربية والإنجليزية بدقة استثنائية.
              </p>
              <p>
                <strong>الأمان والموثوقية:</strong> بياناتك محمية بأعلى معايير الأمان السيبراني، 
                مع ضمان الخصوصية التامة والامتثال لمعايير ZATCA السعودية.
              </p>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left">
            <div className="about-visual">
              <div className="stats-grid">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                  <FontAwesomeIcon icon={faCheckCircle} className="stat-icon" />
                  <div className="stat-number">99.5%</div>
                  <div className="stat-label">دقة مسح OCR</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                  <FontAwesomeIcon icon={faClock} className="stat-icon" />
                  <div className="stat-number">3</div>
                  <div className="stat-label">ثوانٍ متوسط المعالجة</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <FontAwesomeIcon icon={faUsers} className="stat-icon" />
                  <div className="stat-number">2,500+</div>
                  <div className="stat-label">عميل نشط</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <FontAwesomeIcon icon={faCloud} className="stat-icon" />
                  <div className="stat-number">150K+</div>
                  <div className="stat-label">فاتورة تم مسحها</div>
                </div>
              </div>
              
              <div className="company-intro" data-aos="fade-up" data-aos-delay="500">
                <h4>التقنية والخبرة في خدمتك</h4>
                <p>
                  نجمع بين قوة الذكاء الاصطناعي والخبرة البشرية لنقدم لك خدمة مسح فواتير لا مثيل لها. 
                  فريقنا من المطورين والمحاسبين المعتمدين يضمن جودة ودقة البيانات المستخرجة.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12} data-aos="fade-up">
            <div className="achievement-list">
              <div className="achievement-item">
                <FontAwesomeIcon icon={faFileInvoice} className="achievement-icon" />
                <div className="achievement-text">
                  <strong>تقنية OCR متطورة:</strong> نستخدم أحدث خوارزميات التعرف البصري على النصوص
                </div>
              </div>
              <div className="achievement-item">
                <FontAwesomeIcon icon={faShieldAlt} className="achievement-icon" />
                <div className="achievement-text">
                  <strong>أمان البيانات:</strong> حماية متقدمة وامتثال كامل لمعايير الخصوصية السعودية
                </div>
              </div>
              <div className="achievement-item">
                <FontAwesomeIcon icon={faCheckCircle} className="achievement-icon" />
                <div className="achievement-text">
                  <strong>ضمان الجودة:</strong> مراجعة بشرية تضمن دقة تفوق 99.5% في البيانات المستخرجة
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
