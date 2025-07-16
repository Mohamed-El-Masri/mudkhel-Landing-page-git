import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// SolutionSection specific styles
import '../../styles/sections/SolutionSection.css';

import { 
  faPhone,
  faPaperPlane,
  faUsersCog,
  faFileExcel
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SolutionSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">🔧</span>
            كيف نعمل معك
          </h2>
          <p className="section-subtitle">
            3 خطوات بسيطة للحصول على فواتيرك منظمة في ملف Excel
          </p>
        </div>

        <Row>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <div className="solution-content">
              <p className="lead">
                العمل مع مُدخِل سهل وبسيط. أرسل لنا فواتيرك عبر البريد الإلكتروني أو واتساب، 
                وسيتولى فريقنا المختص تحويلها إلى ملفات Excel منظمة.
              </p>
              <p>
                نحن نضمن دقة عالية في الإدخال مع مراجعة مزدوجة من فريق محاسبين مختصين. 
                لا داعي للقلق بشأن الأخطاء أو البيانات المفقودة - نحن نتعامل مع كل ذلك.
              </p>
              <p>
                <strong>الأمر بهذه البساطة!</strong> أرسل فواتيرك، واستلم ملف Excel جاهز خلال 24 ساعة. 
                سيكون لديك المزيد من الوقت للتركيز على نمو أعمالك.
              </p>
            </div>
            
            <div className="solution-steps">
              <div className="step-item" data-aos="fade-up" data-aos-delay="100">
                <div className="step-number">1</div>
                <h5>أرسل فواتيرك</h5>
                <p>عبر واتساب أو البريد الإلكتروني أو سلمها شخصياً</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </div>
              
              <div className="step-item" data-aos="fade-up" data-aos-delay="200">
                <div className="step-number">2</div>
                <h5>نقوم بالعمل</h5>
                <p>فريقنا يدخل البيانات بدقة ومراجعة مزدوجة</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faUsersCog} />
                </div>
              </div>
              
              <div className="step-item" data-aos="fade-up" data-aos-delay="300">
                <div className="step-number">3</div>
                <h5>استلم النتائج</h5>
                <p>ملف Excel منظم جاهز خلال 24 ساعة</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faFileExcel} />
                </div>
              </div>
            </div>

            {/* Contact CTA Section */}
            <div className="demo-section" data-aos="fade-up" data-aos-delay="400">
              <div className="demo-card">
                <div className="demo-header">
                  <h4>🚀 جاهز لتجربة الخدمة؟</h4>
                  <p>تواصل معنا الآن للحصول على عرض أسعار مخصص</p>
                </div>
                <div className="demo-placeholder">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="me-3"
                  >
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    تواصل معنا
                  </Button>
                  <Button 
                    variant="success" 
                    size="lg"
                    onClick={() => window.open('https://wa.me/+966500000000', '_blank')}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                    واتساب
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SolutionSection;
