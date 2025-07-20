import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FeaturesSection specific styles
import '../../styles/sections/FeaturesSection.css';

import { 
  faUsers,
  faClock,
  faLanguage,
  faFileExcel,
  faShieldAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      icon: faFileExcel,
      title: "OCR متقدم + ذكاء اصطناعي",
      description: "تقنية Deep Learning مدربة على ملايين الفواتير لاستخراج البيانات بدقة 99.9% حتى من الخطوط الصعبة والفواتير المعقدة.",
      details: [
        "يقرأ 50+ نوع فاتورة مختلف",
        "يفهم السياق ويصحح الأخطاء تلقائياً", 
        "يتعامل مع الجداول والفواتير متعددة الصفحات"
      ]
    },
    {
      icon: faClock,
      title: "معالجة فورية - صفر انتظار",
      description: "خوارزميات محسنة للسرعة القصوى. من الرفع إلى التحميل في أقل من 30 ثانية مهما كان حجم الفاتورة أو تعقيدها.",
      details: [
        "معالجة متوازية على خوادم قوية",
        "تحسين تلقائي لجودة الصورة",
        "ضغط ذكي لتسريع الرفع والتحميل"
      ]
    },
    {
      icon: faLanguage,
      title: "دعم شامل للغات والخطوط",
      description: "محرك OCR متطور يتعرف على العربية والإنجليزية، الخطوط المطبوعة والمكتوبة، والمصطلحات المحاسبية المتخصصة.",
      details: [
        "يدعم خطوط عربية معقدة وخط اليد",
        "قاموس محاسبي ذكي لفهم المصطلحات",
        "تصحيح تلقائي للأخطاء الإملائية"
      ]
    },
    {
      icon: faShieldAlt,
      title: "أمان بنكي + خصوصية مطلقة",
      description: "تشفير عسكري 256-bit، خوادم محلية، وحذف تلقائي فوري. بياناتك لا تغادر المنطقة ولا تُحفظ أبداً.",
      details: [
        "تشفير SSL/TLS مع مفاتيح ديناميكية",
        "معالجة محلية - لا تخزين سحابي خارجي",
        "حذف البيانات خلال 60 ثانية من المعالجة"
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
    },
    {
      icon: faHeadset,
      title: "تكامل ذكي + API متقدم",
      description: "اربط منصتنا مع أنظمة ERP أو المحاسبة الخاصة بك. API قوي لمعالجة آلاف الفواتير تلقائياً.",
      details: [
        "API RESTful مع وثائق شاملة",
        "تكامل مع SAP, Oracle, QuickBooks",
        "معالجة جماعية لآلاف الفواتير"
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
            اكتشف لماذا اختارت أكثر من 500 شركة منصتنا كحل موثوق لتحويل الفواتير بدقة وأمان وسرعة لا مثيل لها
          </p>
        </div>

        <Row className="grid-auto-fit">
          {features.map((feature, index) => (
            <Col key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-card hover-lift interactive-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
