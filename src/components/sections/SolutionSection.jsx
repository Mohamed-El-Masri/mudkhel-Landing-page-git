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
            <span className="title-icon">🤖</span>
            كيف تعمل التقنية المتطورة خلف الكواليس؟
          </h2>
          <p className="section-subtitle">
            رحلة تحويل ذكية من الرفع إلى التحميل في 3 خطوات تلقائية بالكامل - لا تدخل بشري مطلوب!
          </p>
        </div>

        <Row>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <div className="solution-content">
              <p className="lead">
                <strong>🧠 تقنية متطورة تعمل بصمت:</strong> بمجرد رفع الفاتورة، تبدأ خوارزميات الذكاء الاصطناعي المدربة على ملايين الفواتير بتحليل المحتوى، 
                تحسين جودة الصورة، استخراج النصوص بدقة عالية، فهم السياق المحاسبي، وتنسيق البيانات في Excel احترافي.
              </p>
              <p>
                <strong>⚡ لا مجال للخطأ البشري:</strong> كل شيء مؤتمت بالكامل. المنصة تتعرف على أنواع البيانات (تواريخ، أرقام، نصوص)، 
                تصحح الأخطاء تلقائياً، وتضع كل عنصر في المكان الصحيح في جدول Excel منسق ومصنف.
              </p>
              <p>
                <strong>🔐 أمان مطلق طوال العملية:</strong> التشفير يبدأ من لحظة الرفع، المعالجة تتم على خوادم محلية آمنة، 
                والحذف التلقائي يضمن عدم بقاء أي أثر لبياناتك بعد انتهاء التحويل.
              </p>
            </div>
            <div className="solution-steps">
              <div className="step-item" data-aos="fade-up" data-aos-delay="100">
                <div className="step-number">1</div>
                <h5>📤 رفع ذكي + تحسين فوري</h5>
                <p>اختر ملف PDF أو صورة (حتى لو كانت منخفضة الجودة). نقوم بتحسين الوضوح، تصحيح الانحراف، وتهيئة الصورة للمسح بأفضل دقة ممكنة.</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </div>
              <div className="step-item" data-aos="fade-up" data-aos-delay="200">
                <div className="step-number">2</div>
                <h5>🤖 مسح ذكي + تحليل السياق</h5>
                <p>محرك OCR متقدم يقرأ النصوص، خوارزميات AI تفهم السياق المحاسبي، وذكاء اصطناعي ينظم البيانات ويصحح الأخطاء تلقائياً.</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faUsersCog} />
                </div>
              </div>
              <div className="step-item" data-aos="fade-up" data-aos-delay="300">
                <div className="step-number">3</div>
                <h5>📊 تنسيق Excel + تحميل فوري</h5>
                <p>إنشاء ملف Excel محترف مع تصنيف البيانات، تنسيق الأرقام، تنظيم الجداول، وإضافة الصيغ الحسابية. جاهز للتحميل فوراً!</p>
                <div className="step-icon">
                  <FontAwesomeIcon icon={faFileExcel} />
                </div>
              </div>
            </div>
            {/* Contact CTA Section */}
            <div className="demo-section" data-aos="fade-up" data-aos-delay="400">
              <div className="demo-card">
                <div className="demo-header">
                  <h4>🚀 جرّب الخدمة الآن</h4>
                  <p>ارفع فاتورتك وجرب التحويل الذكي مجاناً</p>
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
