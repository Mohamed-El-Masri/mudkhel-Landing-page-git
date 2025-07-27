import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// PricingSection specific styles
import '../../styles/sections/PricingSection.css';

const PricingSection = () => {

  const pricingPlans = [
    {
      name: "🎁 المجانية",
      price: "0",
      period: "ريال",
      features: [
        "50 فاتورة لمدة شهر",
        "دعم جميع الصيغ (PDF, JPG, PNG)",
        "ملفات Excel منسقة احترافياً",
        "دعم تقني أساسي"
      ],
      buttonText: "ابدأ التجربة المجانية",
      buttonVariant: "outline-primary",
      buttonLink: "https://mudkhil.com"
    },
    {
      name: "🚀 الشهرية",
      price: "79",
      period: "ريال/شهر",
      features: [
        "1000 فاتورة شهرياً",
        "معالجة فورية في أقل من 15 ثانية",
        "تخزين سحابي آمن",
        "دعم فني سريع"
      ],
      buttonText: "اشترك في الباقة الشهرية",
      buttonVariant: "primary",
      buttonLink: "https://mudkhil.com"
    },
    {
      name: "💼 السنوية", 
      price: "249",
      period: "ريال/سنة",
      features: [
        "5000 فاتورة سنوياً",
        "وفّر أكثر من 50%",
        "تخزين سحابي لمدة 5 سنوات",
        "أولوية في الدعم الفني"
      ],
      buttonText: "اشترك في الباقة السنوية",
      buttonVariant: "primary",
      buttonLink: "https://mudkhil.com"
    },
    {
      name: "🏢 باقة الأعمال",
      price: "حسب الطلب",
      period: "",
      features: [
        "بدون حد أقصى للفواتير",
        "تكامل مع أنظمة ERP",
        "قوالب Excel مخصصة",
        "دعم مخصص 24/7"
      ],
      buttonText: "تواصل معنا",
      buttonVariant: "outline-primary",
      buttonLink: "https://mudkhil.com"
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
                  onClick={() => window.open(plan.buttonLink, '_blank')}
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
