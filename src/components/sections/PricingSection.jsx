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
      name: "💫 البداية الذكية",
      price: "فقط 0.50",
      period: "ريال/فاتورة",
      originalPrice: "1.00",
      discount: "وفر 50%",
      features: [
        "🔥 تقنية AI متطورة للتعرف الفوري",
        "📊 تحويل احترافي لملفات Excel",
        "⚡ معالجة سريعة خلال 24 ساعة",
        "📧 دعم مخصص عبر البريد",
        "🛡️ ضمان الدقة 99.9%"
      ],
      buttonText: "🚀 ابدأ مجاناً الآن",
      buttonVariant: "outline-primary",
      freeTrialText: "تجربة مجانية لأول 5 فواتير!"
    },
    {
      name: "⚡ التطور السريع",
      price: "فقط 1",
      period: "ريال/فاتورة",
      originalPrice: "2.00",
      discount: "وفر 50%",
      features: [
        "🎯 معالجة AI فائقة الذكاء",
        "🏆 تقارير تحليلية متقدمة",
        "🚀 تسليم فوري خلال 12 ساعة",
        "📞 دعم هاتفي مباشر",
        "💎 أولوية في المعالجة"
      ],
      buttonText: "💥 احجز بخصم 50%",
      buttonVariant: "primary",
      popularChoice: true
    },
    {
      name: "👑 الحل المتكامل",
      price: "فقط 1.50",
      period: "ريال/فاتورة",
      originalPrice: "3.00",
      discount: "وفر 50%",
      features: [
        "🤖 AI متطور مع تعلم آلي",
        "📈 تحليلات ذكية وتقارير مفصلة",
        "⚡ معالجة فورية خلال 6 ساعات",
        "🎧 دعم VIP على مدار 24/7",
        "🔒 أمان متقدم وحماية البيانات"
      ],
      buttonText: "🔥 العرض الأقوى",
      buttonVariant: "primary",
      featured: true,
      badge: "💎 الأكثر طلباً",
      bonusText: "مكافأة: تقرير تحليلي مجاني!"
    },
    {
      name: "🏢 قوة المؤسسات",
      price: "عرض خاص",
      period: "حسب الحجم",
      specialOffer: "خصم يصل إلى 70%",
      features: [
        "🚀 منصة AI مخصصة بالكامل",
        "👥 فريق خبراء مخصص لك",
        "⚡ معالجة فورية بلا حدود",
        "🤝 مدير حساب شخصي",
        "🛠️ تكامل مع أنظمتك الحالية"
      ],
      buttonText: "💼 طلب عرض مخصص",
      buttonVariant: "outline-primary",
      enterpriseNote: "مشاورة مجانية + تحليل احتياجاتك"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">🎯</span>
            أسعار خيالية لخدمة استثنائية
          </h2>
          <p className="section-subtitle">
            🔥 عرض محدود: خصم 50% على جميع الباقات! لا تفوت الفرصة ⏰
          </p>
          <div className="urgency-timer">
            العرض ينتهي خلال: <span className="timer-countdown">⏰ 7 أيام فقط</span>
          </div>
        </div>

        <Row className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`pricing-card ${plan.featured ? 'featured' : ''} ${plan.popularChoice ? 'popular-choice' : ''}`}>
                {plan.badge && (
                  <div className="popular-badge">{plan.badge}</div>
                )}
                {plan.discount && (
                  <div className="discount-ribbon">{plan.discount}</div>
                )}
                <div className="pricing-header">
                  <h4>{plan.name}</h4>
                  <div className="price">
                    {plan.originalPrice && (
                      <span className="original-price">{plan.originalPrice} ريال</span>
                    )}
                    <span className="current-price">{plan.price}</span>
                    {plan.period && <span className="period">{plan.period}</span>}
                    {plan.specialOffer && <span className="special-offer">{plan.specialOffer}</span>}
                  </div>
                  {plan.freeTrialText && (
                    <div className="free-trial">{plan.freeTrialText}</div>
                  )}
                  {plan.bonusText && (
                    <div className="bonus-text">{plan.bonusText}</div>
                  )}
                  {plan.enterpriseNote && (
                    <div className="enterprise-note">{plan.enterpriseNote}</div>
                  )}
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
                  className={`w-100 pricing-btn ${plan.featured ? 'btn-featured' : ''}`}
                  onClick={() => scrollToSection('contact')}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* 🎯 MARKETING GUARANTEES SECTION */}
        <Row className="mt-5" data-aos="fade-up" data-aos-delay="600">
          <Col lg={12}>
            <div className="guarantees-section">
              <h3 className="guarantees-title">💎 ضماناتنا لك</h3>
              <Row className="guarantees-grid">
                <Col md={4}>
                  <div className="guarantee-item">
                    <div className="guarantee-icon">🛡️</div>
                    <h5>ضمان الدقة 99.9%</h5>
                    <p>نضمن لك دقة لا تقل عن 99.9% أو نعيد لك أموالك كاملة</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="guarantee-item">
                    <div className="guarantee-icon">⚡</div>
                    <h5>ضمان السرعة</h5>
                    <p>التسليم في الوقت المحدد أو نمنحك خصم 50% على طلبك التالي</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="guarantee-item">
                    <div className="guarantee-icon">💰</div>
                    <h5>ضمان استرداد الأموال</h5>
                    <p>غير راضي؟ استرد أموالك خلال 7 أيام بدون أسئلة</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* 🔥 URGENCY CTA SECTION */}
        <Row className="mt-5" data-aos="fade-up" data-aos-delay="700">
          <Col lg={12}>
            <div className="urgency-cta-section">
              <div className="urgency-content">
                <h3>🔥 لا تفوت هذا العرض الاستثنائي!</h3>
                <p>أكثر من <strong>1,247 عميل</strong> استفادوا من هذا العرض في آخر 30 يوم</p>
                <div className="urgency-stats">
                  <div className="stat">
                    <span className="stat-number">24</span>
                    <span className="stat-label">ساعة متبقية</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">47</span>
                    <span className="stat-label">عميل حجز اليوم</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">93%</span>
                    <span className="stat-label">نسبة الرضا</span>
                  </div>
                </div>
                <Button 
                  variant="danger" 
                  size="lg" 
                  className="urgency-btn"
                  onClick={() => scrollToSection('contact')}
                >
                  🚀 احجز الآن بخصم 50% - عرض محدود!
                </Button>
                <div className="urgency-note">
                  ⚠️ العرض صالح لأول 100 عميل فقط - تبقى 23 مقعد
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
