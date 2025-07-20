import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// AboutSection specific styles
import '../../styles/sections/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">🚀</span>
            لماذا مُدخِل هو الأقوى في السوق؟
          </h2>
          <p className="section-subtitle">
            تقنيات متقدمة تجعلنا الخيار الأول للشركات الرائدة في تحويل الفواتير إلى بيانات منظمة فوراً
          </p>
        </div>

        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="about-content">
              <h3>⚡ تقنية OCR متطورة + ذكاء اصطناعي متقدم</h3>
              <p>
                <strong>ليس مجرد مسح ضوئي عادي!</strong> نستخدم أحدث خوارزميات التعلم العميق المدربة على ملايين الفواتير العربية والإنجليزية.
                منصتنا تفهم السياق، تتعرف على الخطوط الصعبة، وتستخلص البيانات بدقة مذهلة حتى من الفواتير المعقدة أو منخفضة الجودة.
              </p>
              <p>
                <strong>🎯 التفوق التقني:</strong> نقدم معدل دقة 99.9% في استخراج البيانات مع قدرة على معالجة 
                أكثر من 50 نوع فاتورة مختلف. تقنيتنا تتطور ذاتياً وتتحسن مع كل استخدام.
              </p>
              <p>
                <strong>💼 للشركات الذكية:</strong> أكثر من 500 شركة تثق بنا لتوفير ساعات من الوقت يومياً. 
                لا حاجة لموظفين إدخال بيانات، لا أخطاء بشرية، ولا تأخير في المعالجة.
              </p>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left">
            <div className="about-visual">
              <div className="stats-grid">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">دقة استخراج البيانات</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                  <div className="stat-number">15 ثانية</div>
                  <div className="stat-label">متوسط زمن التحويل</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stat-number">+50,000</div>
                  <div className="stat-label">فاتورة تم تحويلها</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">شركة تثق بنا</div>
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
