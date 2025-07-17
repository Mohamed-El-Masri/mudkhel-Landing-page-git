import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FeaturesSection specific styles
import '../../styles/sections/FeaturesSection.css';

import { 
  faFileInvoice,
  faZap,
  faLanguage,
  faFileExcel,
  faShieldAlt,
  faCloud,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      icon: faFileInvoice,
      title: "مسح OCR متطور",
      description: "تقنية التعرف البصري على النصوص بالذكاء الاصطناعي لقراءة الفواتير بدقة فائقة",
      details: [
        "دقة مسح تفوق 99.5%",
        "قراءة الفواتير التالفة أو غير الواضحة",
        "معالجة جميع تنسيقات الفواتير"
      ]
    },
    {
      icon: faZap,
      title: "معالجة فورية",
      description: "خوارزميات سريعة تحول فواتيرك إلى بيانات منظمة في ثوانٍ معدودة",
      details: [
        "معالجة في أقل من 3 ثوانٍ",
        "تشغيل على مدار 24/7",
        "إنتاجية عالية للطلبات الكبيرة"
      ]
    },
    {
      icon: faLanguage,
      title: "دعم ثنائي اللغة",
      description: "قراءة وفهم الفواتير باللغتين العربية والإنجليزية بدقة متقدمة",
      details: [
        "خوارزميات مخصصة للغة العربية",
        "تعرف على الخطوط المختلفة",
        "استخراج البيانات المالية بدقة"
      ]
    },
    {
      icon: faFileExcel,
      title: "تصدير Excel احترافي",
      description: "بيانات منظمة في ملفات Excel جاهزة للاستخدام المباشر في أنظمتك المحاسبية",
      details: [
        "تنسيق محاسبي موحد",
        "جداول ديناميكية جاهزة",
        "صيغ محاسبية متقدمة"
      ]
    },
    {
      icon: faShieldAlt,
      title: "امتثال ZATCA كامل",
      description: "ضمان توافق كامل مع متطلبات هيئة الزكاة والضريبة والجمارك السعودية",
      details: [
        "معايير ZATCA الجديدة",
        "فاتورة إلكترونية معتمدة",
        "ضمان الامتثال القانوني"
      ]
    },
    {
      icon: faCloud,
      title: "منصة سحابية آمنة",
      description: "معالجة سحابية متقدمة مع أعلى معايير الأمان وحماية البيانات",
      details: [
        "تشفير من الدرجة المصرفية",
        "نسخ احتياطية تلقائية",
        "وصول آمن من أي مكان"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faCogs} className="title-icon" />
            تقنيات OCR المتطورة
          </h2>
          <p className="section-subtitle">
            مميزات تقنية الذكاء الاصطناعي لمسح الفواتير وتحويلها الفوري
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
