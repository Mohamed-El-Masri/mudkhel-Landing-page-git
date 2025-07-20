import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo.png';
// Footer specific styles
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <div className="footer-brand">
              <div className="brand-logo mb-3">
               <img src={Logo} alt="مُدخِل" className="brand-logo" />
                {/* <span className="brand-text h4">مُدخِل</span> */}
              </div>
              <p className="brand-description text-muted">
                خدمة مسح وإدخال الفواتير الاحترافية - نحول فواتيرك الورقية إلى ملفات Excel منظمة بدقة عالية وسرعة في التسليم
              </p>
              <div className="social-links">
                <a href="#" className="social-link me-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-link me-3">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="social-link me-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="text-white mb-3">الشركة</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-muted text-decoration-none">عن مُدخِل</a></li>
                <li><a href="#features" className="text-muted text-decoration-none">المميزات</a></li>
                <li><a href="#pricing" className="text-muted text-decoration-none">الأسعار</a></li>
                <li><a href="#contact" className="text-muted text-decoration-none">تواصل معنا</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="text-white mb-3">الخدمات</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">مسح الفواتير</a></li>
                <li><a href="#" className="text-muted text-decoration-none">إدخال البيانات</a></li>
                <li><a href="#" className="text-muted text-decoration-none">ملفات Excel</a></li>
                <li><a href="#" className="text-muted text-decoration-none">خدمة سريعة</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="text-white mb-3">الدعم</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">مركز المساعدة</a></li>
                <li><a href="#" className="text-muted text-decoration-none">الأسئلة الشائعة</a></li>
                <li><a href="#" className="text-muted text-decoration-none">الدعم الفني</a></li>
                <li><a href="#" className="text-muted text-decoration-none">تقديم شكوى</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="text-white mb-3">قانوني</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-muted text-decoration-none">شروط الاستخدام</a></li>
                <li><a href="#" className="text-muted text-decoration-none">اتفاقية الخدمة</a></li>
                <li><a href="#" className="text-muted text-decoration-none">ملفات تعريف الارتباط</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted mb-0">
              &copy; 2025 شركة مُدخِل - جميع الحقوق محفوظة
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-badge">
              <span className="text-muted">صُنع بـ ❤️ في السعودية 🇸🇦</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
