import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileInvoice,
  faCogs,
  faFileExcel,
  faArrowDown,
  faChartLine,
  faShield,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

// ProblemSection specific styles
import '../../styles/sections/ProblemSection.css';

const ProblemSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.problem-card, .step-item');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="problem" 
      className="problem-section section-padding"
      ref={sectionRef}
    >
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">🚀</span>
            لماذا مُدخِل هو الأقوى في السوق؟
          </h2>
          <p className="section-subtitle">
            الحل الأذكى والأسرع لمعالجة الفواتير في الشرق الأوسط - 
            <span className="subtitle-highlight"> نحن لا نقدم مجرد خدمة، بل نغير طريقة عملك للأفضل</span>
          </p>
        </div>

        <Row className="problem-stats">
          <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="100">
            <div className="problem-card" tabIndex="0" role="article">
              <div className="problem-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="problem-stat" aria-label="ثمانية وتسعون بالمائة">98%</div>
              <p>
                <strong>دقة لا مثيل لها</strong><br />
                أعلى معدل دقة في السوق لمعالجة الفواتير والإيصالات باستخدام تقنيات الذكاء الاصطناعي المتقدمة
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={6} data-aos="fade-up" data-aos-delay="200">
            <div className="problem-card" tabIndex="0" role="article">
              <div className="problem-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="problem-stat" aria-label="عشرة أضعاف">10x</div>
              <p>
                <strong>سرعة فائقة في المعالجة</strong><br />
                أسرع 10 مرات من الطرق التقليدية - نحول فواتيرك إلى بيانات منظمة في ثوان معدودة
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={12} data-aos="fade-up" data-aos-delay="300">
            <div className="problem-card" tabIndex="0" role="article">
              <div className="problem-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faShield} />
              </div>
              <div className="problem-stat" aria-label="مائة بالمائة">100%</div>
              <p>
                <strong>أمان وموثوقية تامة</strong><br />
                حماية كاملة لبياناتك مع التشفير المتقدم والامتثال لأعلى معايير الأمان الدولية
              </p>
            </div>
          </Col>
        </Row>

        {/* Enhanced Solution Demo */}
        <Row className="solution-demo">
          <Col lg={12}>
            <div 
              className="solution-visual"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="solution-dashboard">
                <div className="dashboard-header">
                  <div className="dashboard-title">
                    🤖 منصة مُدخِل الذكية - تحويل فوري وموثوق
                  </div>
                  <p style={{ 
                    color: 'var(--problem-text-secondary)', 
                    fontSize: '1.1rem', 
                    margin: '1rem 0 0', 
                    fontWeight: '500' 
                  }}>
                    من الفاتورة المصورة إلى ملف Excel منسق في ثوانٍ معدودة
                  </p>
                </div>
                <div className="dashboard-content">
                  <div className="service-steps">
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                      tabIndex="0"
                      role="button"
                      aria-label="الخطوة الأولى: رفع الفاتورة"
                    >
                      <FontAwesomeIcon icon={faFileInvoice} aria-hidden="true" />
                      <span>
                        <strong>1. ارفع الفاتورة</strong><br />
                        يدعم PDF، JPG، PNG<br />
                        <em style={{ opacity: '0.8', fontSize: '0.9em' }}>جودة عالية أو منخفضة</em>
                      </span>
                    </div>
                    
                    <div 
                      className="step-arrow"
                      data-aos="fade-in"
                      data-aos-delay="600"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="700"
                      tabIndex="0"
                      role="button"
                      aria-label="الخطوة الثانية: المسح الذكي"
                    >
                      <FontAwesomeIcon icon={faCogs} aria-hidden="true" />
                      <span>
                        <strong>2. مسح ذكي</strong><br />
                        تقنية OCR + AI متقدمة<br />
                        <em style={{ opacity: '0.8', fontSize: '0.9em' }}>دقة 98%</em>
                      </span>
                    </div>
                    
                    <div 
                      className="step-arrow"
                      data-aos="fade-in"
                      data-aos-delay="800"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    
                    <div 
                      className="step-item"
                      data-aos="zoom-in"
                      data-aos-delay="900"
                      tabIndex="0"
                      role="button"
                      aria-label="الخطوة الثالثة: تحميل ملف Excel"
                    >
                      <FontAwesomeIcon icon={faFileExcel} aria-hidden="true" />
                      <span>
                        <strong>3. تحميل Excel</strong><br />
                        منسق ومصنف تلقائياً<br />
                        <em style={{ opacity: '0.8', fontSize: '0.9em' }}>جاهز للمحاسبة</em>
                      </span>
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

export default ProblemSection;
