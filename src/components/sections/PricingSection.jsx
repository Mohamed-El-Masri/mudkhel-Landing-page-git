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
      name: "الباقة الأساسية",
      price: "0.50",
      period: "ريال/فاتورة",
      features: [
        "إدخال البيانات الأساسية",
        "ملف Excel منظم",
        "تسليم خلال 48 ساعة",
        "دعم عبر البريد"
      ],
      buttonText: "اطلب عرض سعر",
      buttonVariant: "outline-primary"
    },
    {
      name: "الباقة السريعة",
      price: "1",
      period: "ريال/فاتورة",
      features: [
        "إدخال البيانات الكاملة",
        "ملف Excel متقدم",
        "تسليم خلال 24 ساعة",
        "دعم هاتفي"
      ],
      buttonText: "اختر هذه الخطة",
      buttonVariant: "primary"
    },
    {
      name: "الباقة المتقدمة",
      price: "1.50",
      period: "ريال/فاتورة",
      features: [
        "إدخال متقدم مع التصنيف",
        "تقارير وتحليلات",
        "تسليم خلال 12 ساعة",
        "دعم أولوية 24/7"
      ],
      buttonText: "اختر هذه الباقة",
      buttonVariant: "primary",
      featured: true,
      badge: "الأكثر طلباً"
    },
    {
      name: "باقة المؤسسات",
      price: "حسب الحجم",
      period: "",
      features: [
        "خدمة مخصصة كاملة",
        "فريق مخصص لحسابك",
        "تسليم فوري",
        "مدير حساب مخصص"
      ],
      buttonText: "تواصل معنا",
      buttonVariant: "outline-primary"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">💰</span>
            أسعار الخدمة
          </h2>
          <p className="section-subtitle">
            أسعار مرنة تناسب احتياجاتك - من الشركات الصغيرة إلى المؤسسات الكبيرة
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
