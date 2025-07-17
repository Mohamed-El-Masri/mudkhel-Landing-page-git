import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// SolutionSection specific styles
import '../../styles/sections/SolutionSection.css';

import { 
  faPhone,
  faPaperPlane,
  faUsersCog,
  faFileExcel,
  faCogs,
  faRocket,
  faGem,
  faFire,
  faGift,
  faStar
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
            <FontAwesomeIcon icon={faCogs} className="title-icon" />
            كيف تعمل تقنية OCR المتطورة؟
          </h2>
          <p className="section-subtitle">
            <FontAwesomeIcon icon={faRocket} /> 3 خطوات تقنية فقط تفصلك عن تحويل فواتيرك بالذكاء الاصطناعي
          </p>
          <div className="success-banner">
            <FontAwesomeIcon icon={faGem} /> أكثر من 150,000 فاتورة تم معالجتها بتقنية OCR
          </div>
        </div>

        <Row>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <div className="solution-content">
              <div className="magic-transformation">
                <h3>
                  <FontAwesomeIcon icon={faCogs} /> تقنية OCR المتطورة
                </h3>
                <p className="lead transformation-text">
                  تجربة متقدمة في معالجة الفواتير: بدلاً من الإدخال اليدوي المعرض للأخطاء، 
                  تعتمد تقنيتنا على الذكاء الاصطناعي لتحويل فواتيرك إلى بيانات منظمة بدقة فائقة.
                </p>
                <div className="before-after">
                  <div className="before-state">
                    <h5>التحدي التقليدي:</h5>
                    <ul>
                      <li>ساعات من الإدخال اليدوي</li>
                      <li>نسبة أخطاء بشرية عالية</li>
                      <li>استهلاك موارد بشرية مكلفة</li>
                      <li>بطء في معالجة الطلبات الكبيرة</li>
                    </ul>
                  </div>
                  <div className="arrow-transformation">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div className="after-state">
                    <h5>حل OCR المتطور:</h5>
                    <ul>
                      <li>معالجة فورية في ثوانٍ</li>
                      <li>دقة تفوق 99.5%</li>
                      <li>تكلفة أقل بـ 80%</li>
                      <li>قابلية معالجة آلاف الفواتير</li>
                    </ul>
                  </div>
                </div>
                <div className="guarantee-box">
                  <strong>
                    <FontAwesomeIcon icon={faGem} /> ضمان تقني: دقة OCR تفوق 99.5% أو استرداد كامل
                  </strong>
                </div>
              </div>
            </div>
            
            <div className="solution-steps">
              <div className="step-item magic-step" data-aos="fade-up" data-aos-delay="100">
                <div className="step-number pulsing">1</div>
                <h5>
                  <FontAwesomeIcon icon={faRocket} /> رفع الفاتورة
                </h5>
                <p>ارفع فاتورتك بأي تنسيق (PDF، صورة، مسح ضوئي)</p>
                <div className="step-icon floating">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="step-time">دقيقة واحدة فقط</div>
              </div>
              
              <div className="transformation-arrow">
                <div className="arrow-line"></div>
                <div className="arrow-text">
                  <FontAwesomeIcon icon={faCogs} /> معالجة OCR
                </div>
              </div>
              
              <div className="step-item magic-step" data-aos="fade-up" data-aos-delay="200">
                <div className="step-number pulsing">2</div>
                <h5>
                  <FontAwesomeIcon icon={faCogs} /> تحليل ذكي
                </h5>
                <p>خوارزميات الذكاء الاصطناعي تحلل وتستخرج البيانات</p>
                <div className="step-icon floating">
                  <FontAwesomeIcon icon={faUsersCog} />
                </div>
                <div className="step-time">معالجة في 3 ثوانٍ</div>
              </div>
              
              <div className="transformation-arrow">
                <div className="arrow-line"></div>
                <div className="arrow-text">
                  <FontAwesomeIcon icon={faGem} /> النتيجة النهائية
                </div>
              </div>
              
              <div className="step-item success-step" data-aos="fade-up" data-aos-delay="300">
                <div className="step-number glowing">3</div>
                <h5>
                  <FontAwesomeIcon icon={faGem} /> تسليم البيانات
                </h5>
                <p>ملف Excel منظم + تقرير تحليلي تلقائي</p>
                <div className="step-icon rotating">
                  <FontAwesomeIcon icon={faFileExcel} />
                </div>
                <div className="step-time">
                  <FontAwesomeIcon icon={faGift} /> جاهز للتحميل فوراً
                </div>
              </div>
            </div>

            <div className="demo-section promotional-cta" data-aos="fade-up" data-aos-delay="400">
              <div className="demo-card">
                <div className="demo-header">
                  <h4>
                    <FontAwesomeIcon icon={faFire} /> عرض تقني محدود - تجربة OCR مجانية
                  </h4>
                  <p>اختبر تقنية OCR المتطورة + خصم 50% على الخطة الشهرية الأولى</p>
                  <div className="limited-offer">
                    محدود: 50 تجربة مجانية متبقية فقط
                  </div>
                </div>
                
                <div className="offer-benefits">
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faGift} className="benefit-icon" />
                    <span>تجربة مجانية لـ 10 فواتير</span>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faGem} className="benefit-icon" />
                    <span>خصم 50% للشهر الأول</span>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faRocket} className="benefit-icon" />
                    <span>معالجة ذات أولوية</span>
                  </div>
                  <div className="benefit-item">
                    <FontAwesomeIcon icon={faCogs} className="benefit-icon" />
                    <span>تقرير OCR تحليلي مجاني</span>
                  </div>
                </div>
                
                <div className="demo-placeholder">
                  <Button 
                    variant="danger" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="cta-primary-btn me-3"
                  >
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <FontAwesomeIcon icon={faFire} /> جرب OCR مجاناً
                  </Button>
                  <Button 
                    variant="success" 
                    size="lg"
                    onClick={() => window.open('https://wa.me/+966500000000', '_blank')}
                    className="whatsapp-btn"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                    استشارة تقنية فورية
                  </Button>
                </div>
                
                <div className="urgency-footer">
                  العرض ينتهي خلال: <span className="countdown-timer">6 أيام 14 ساعة</span>
                </div>
              </div>
            </div>
            
            <div className="success-preview" data-aos="fade-up" data-aos-delay="500">
              <h4>
                <FontAwesomeIcon icon={faGem} /> تقييمات العملاء لتقنية OCR
              </h4>
              <div className="testimonials-grid">
                <div className="testimonial-quick">
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p>"دقة OCR مذهلة، وفرت 25 ساعة شهرياً"</p>
                  <span>- أحمد المالكي، مدير مالي</span>
                </div>
                <div className="testimonial-quick">
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p>"تقنية متطورة، نتائج فورية وموثوقة"</p>
                  <span>- فاطمة الزهراني، محاسبة</span>
                </div>
                <div className="testimonial-quick">
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p>"أفضل حل OCR جربته على الإطلاق"</p>
                  <span>- خالد السعودي، رائد أعمال</span>
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
