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
      icon: faUsers,
      title: "فريق متخصص",
      description: "محاسبون ومختصون في إدخال البيانات بخبرة تزيد عن 5 سنوات",
      details: [
        "دقة 99.9% في الإدخال",
        "مراجعة مزدوجة للبيانات",
        "خبرة في جميع أنواع الفواتير"
      ]
    },
    {
      icon: faClock,
      title: "سرعة في التسليم",
      description: "نسلم لك ملف Excel الجاهز خلال 24 ساعة من استلام الفواتير",
      details: [
        "تسليم سريع مضمون",
        "خدمة طوارئ متاحة",
        "إشعارات فورية بالتقدم"
      ]
    },
    {
      icon: faLanguage,
      title: "دعم متعدد اللغات",
      description: "نتعامل مع الفواتير العربية والإنجليزية بنفس الدقة والاحترافية",
      details: [
        "قراءة النصوص العربية والإنجليزية",
        "تعامل مع الخطوط المختلفة",
        "فهم المصطلحات المحاسبية"
      ]
    },
    {
      icon: faFileExcel,
      title: "ملفات Excel منظمة",
      description: "نسلم لك ملفات Excel مرتبة ومصنفة حسب احتياجاتك",
      details: [
        "تنسيق احترافي",
        "تصنيف تلقائي",
        "صيغ محاسبية جاهزة"
      ]
    },
    {
      icon: faShieldAlt,
      title: "امتثال للمعايير",
      description: "نضمن توافق البيانات مع متطلبات ZATCA والمعايير المحاسبية",
      details: [
        "متوافق مع ZATCA",
        "معايير محاسبية دولية",
        "ضمان الامتثال القانوني"
      ]
    },
    {
      icon: faHeadset,
      title: "دعم فني مميز",
      description: "فريق دعم متخصص للإجابة على استفساراتك وحل أي مشكلة",
      details: [
        "دعم 24/7",
        "استجابة سريعة",
        "خبراء متخصصون"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">⚡</span>
            لماذا تختار مُدخِل؟
          </h2>
          <p className="section-subtitle">
            مميزات خدمتنا التي تجعل إدارة الفواتير أسهل وأذكى
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
