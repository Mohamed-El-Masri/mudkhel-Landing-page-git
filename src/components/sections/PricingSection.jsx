import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// PricingSection specific styles
import '../../styles/sections/PricingSection.css';

const PricingSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: "🎁 تجربة مجانية",
      price: "0",
      period: "ريال",
      features: [
        "تحويل 3 فواتير مجاناً لتجربة الجودة",
        "دعم جميع الصيغ (PDF, JPG, PNG)",
        "ملفات Excel منسقة احترافياً",
        "دعم تقني مجاني عبر الواتساب"
      ],
      buttonText: "ابدأ التجربة المجانية",
      buttonVariant: "outline-primary"
    },
    {
      name: "🚀 الباقة الذكية",
      price: "0.80",
      period: "ريال/فاتورة (1-100 فاتورة شهرياً)",
      features: [
        "تحويل غير محدود خلال الشهر",
        "معالجة فورية في أقل من 30 ثانية",
        "تحميل مباشر + أرشفة سحابية مؤقتة",
        "دعم فني سريع + ضمان استرداد"
      ],
      buttonText: "اشترك في الباقة الذكية",
      buttonVariant: "primary"
    },
    {
      name: "💼 باقة الأعمال المتقدمة", 
      price: "0.50",
      period: "ريال/فاتورة (100+ فاتورة شهرياً)",
      features: [
        "خصم حجم + معالجة جماعية دفعة واحدة",
        "قوالب Excel مخصصة حسب احتياجك",
        "تقارير تحليلية + إحصائيات مفصلة",
        "دعم أولوية + مدير حساب مخصص"
      ],
      buttonText: "للشركات والمؤسسات",
      buttonVariant: "primary",
      featured: true,
      badge: "🏆 الأكثر توفيراً"
    },
    {
      name: "🏢 المؤسسات الكبيرة",
      price: "حلول مخصصة",
      period: "",
      features: [
        "API متقدم + تكامل مع أنظمة ERP",
        "معالجة آلاف الفواتير تلقائياً",
        "خوادم مخصصة + SLA مضمون 99.9%",
        "فريق دعم تقني مخصص + تدريب مجاني"
      ],
      buttonText: "تواصل للحصول على عرض مخصص",
      buttonVariant: "outline-primary"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">💰</span>
            باقات مرنة تناسب كل احتياج - من التجربة إلى المؤسسات
          </h2>
          <p className="section-subtitle">
            ابدأ مجاناً واختبر جودة تحويل الفواتير، ثم اختر الباقة التي توفر لك أقصى قيمة مقابل احتياجك الفعلي
          </p>
        </div>

        <Row className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.badge && (
                  <div className="popular-badge">{plan.badge}</div>
                )}
                <div className="pricing-header">
                  <h4>{plan.name}</h4>
                  <div className="price">
                    <span className="currency">{plan.price}</span>
                    {plan.period && <span className="period">{plan.period}</span>}
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FontAwesomeIcon icon={faCheck} className="me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant={plan.buttonVariant}
                  className="w-100"
                  onClick={() => scrollToSection('contact')}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
