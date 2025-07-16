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
            <span className="title-icon">🏢</span>
            من نحن
          </h2>
          <p className="section-subtitle">
            شركة متخصصة في خدمات مسح وإدخال الفواتير بأعلى معايير الجودة
          </p>
        </div>

        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="about-content">
              <h3>🎯 مُدخِل - شريكك في إدارة الفواتير</h3>
              <p>
                نحن شركة متخصصة في تقديم خدمات مسح وإدخال الفواتير باستخدام أحدث التقنيات. 
                فريقنا المتخصص يتولى تحويل فواتيرك الورقية إلى ملفات Excel منظمة ودقيقة.
              </p>
              <p>
                <strong>لماذا تختارنا؟</strong> لأننا نقدم خدمة احترافية، سريعة، وموثوقة 
                توفر عليك الوقت والجهد في إدخال البيانات يدوياً.
              </p>
              <p>
                مع مُدخِل، نمسح فواتيرك بسرعة خيالية، نقرأها بلغتين بدون صداع، 
                ونخزنها في السحابة بعيدًا عن انسكاب القهوة وتحلل النص على الفاتورة.
              </p>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left">
            <div className="about-visual">
              <div className="stats-grid">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">دقة في الإدخال</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                  <div className="stat-number">24</div>
                  <div className="stat-label">ساعة تسليم</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">عميل راضي</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-number">5</div>
                  <div className="stat-label">سنوات خبرة</div>
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
