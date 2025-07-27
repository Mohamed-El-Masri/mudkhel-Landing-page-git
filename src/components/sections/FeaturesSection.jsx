import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain,
  faRocket,
  faGlobe,
  faShieldHalved,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

// FeaturesSection specific styles
import '../../styles/sections/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: faBrain,
      title: "OCR متقدم + ذكاء اصطناعي",
      description: "تقنية Deep Learning مدربة على ملايين الفواتير لاستخراج البيانات بدقة 99.9% حتى من الخطوط الصعبة والفواتير المعقدة.",
      details: [
        "يقرأ 50+ نوع فاتورة مختلف",
        "يفهم السياق ويصحح الأخطاء تلقائياً", 
        "يتعامل مع الجداول والفواتير متعددة الصفحات"
      ]
    },
    {
      icon: faRocket,
      title: "معالجة فورية - صفر انتظار",
      description: "خوارزميات محسنة للسرعة القصوى. من الرفع إلى التحميل في أقل من 15 ثانية مهما كان حجم الفاتورة أو تعقيدها.",
      details: [
        "معالجة متوازية على خوادم قوية",
        "ضغط ذكي لتسريع الرفع والتحميل"
      ]
    },
    {
      icon: faGlobe,
      title: "دعم شامل للغات والخطوط",
      description: "محرك OCR متطور يتعرف على العربية والإنجليزية، الخطوط المطبوعة والمكتوبة، والمصطلحات المحاسبية المتخصصة.",
      details: [
        "يدعم خطوط عربية معقدة وخط اليد",
        "قاموس محاسبي ذكي لفهم المصطلحات"
      ]
    },
    {
      icon: faShieldHalved,
      title: "خصوصية عالية وامان موثوق",
      description: "بياناتك محفوظة بأعلى معايير الأمان باستخدام تقنية التخزين السحابي. لا يتم مشاركة بياناتك مع أي طرف ثالث، ولا نستخدمها لأي أغراض غير المعالجة.",
      details: [
        "تشفير SSL/TLS مع مفاتيح ديناميكية",
        "صلاحيات الوصول مرنة وتخضع للمستخدم فقط",
        "حفظ آمن في السحابة لمدة 5 سنوات"
      ]
    },
    {
      icon: faShieldHalved,
      title: "خصوصية عالية وامان موثوق",
      description: "بياناتك محفوظة بأعلى معايير الأمان باستخدام تقنية التخزين السحابي. لا يتم مشاركة بياناتك مع أي طرف ثالث، ولا نستخدمها لأي أغراض غير المعالجة.",
      details: [
        "تشفير SSL/TLS مع مفاتيح ديناميكية",
        "صلاحيات الوصول مرنة وتخضع للمستخدم فقط",
        "حفظ آمن في السحابة لمدة 5 سنوات"
      ]
    },
    {
      icon: faUsers,
      title: "واجهة سهلة + دعم متخصص",
      description: "مصممة لتكون بديهية للجميع مع دعم فني من خبراء OCR ومحاسبين معتمدين متاح 24/7.",
      details: [
        "واجهة بسيطة تعمل من أي جهاز",
        "دعم فني متخصص في OCR والمحاسبة",
        "تدريب مجاني لفرق العمل الكبيرة"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">⚡</span>
            تقنيات متطورة تجعلنا الأقوى في السوق
          </h2>
          <p className="section-subtitle">
            اكتشف لماذا اختارت أكثر من 50 شركة منصتنا كحل موثوق لتحويل الفواتير بدقة وأمان وسرعة لا مثيل لها
          </p>
        </div>

        <Row>
          {features.map((feature, index) => (
            <Col xs={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-card hover-lift interactive-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <div className="feature-details">
                    <ul>
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
