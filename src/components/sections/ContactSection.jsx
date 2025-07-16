import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ContactSection specific styles
import '../../styles/sections/ContactSection.css';

import { 
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    invoices: '1-50',
    service: 'basic',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">📞</span>
            اطلب الخدمة الآن
          </h2>
          <p className="section-subtitle">
            جاهز لتحويل فواتيرك إلى ملفات Excel منظمة؟ تواصل معنا للحصول على عرض سعر مجاني!
          </p>
        </div>

        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="contact-info">
              <h3>🚀 ابدأ خدمة مُدخِل اليوم!</h3>
              <p className="contact-intro">
                أرسل لنا فواتيرك واحصل على ملف Excel منظم خلال 24 ساعة. 
                فريقنا جاهز لخدمتك بأعلى معايير الجودة والدقة.
              </p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="contact-details">
                    <h5>واتساب (الأسرع)</h5>
                    <a href="https://wa.me/+966500000000">+966 50 000 0000</a>
                    <span className="contact-note">أرسل صور الفواتير مباشرة</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-details">
                    <h5>البريد الإلكتروني</h5>
                    <a href="mailto:service@mudakhil.com">service@mudakhil.com</a>
                    <span className="contact-note">لإرسال الفواتير والمرفقات</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-details">
                    <h5>رقم الهاتف</h5>
                    <a href="tel:+966112345678">+966 11 234 5678</a>
                    <span className="contact-note">للاستفسارات والدعم</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="contact-details">
                    <h5>العنوان</h5>
                    <span>الرياض، المملكة العربية السعودية</span>
                    <span className="contact-note">لتسليم الفواتير شخصياً</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left">
            <div className="contact-form">
              <h4 className="form-title">احصل على عرض سعر مجاني</h4>
              <p className="form-subtitle">أخبرنا عن احتياجاتك وسنقدم لك عرض سعر مخصص</p>
              
              {showAlert && (
                <Alert variant="success" className="mb-4">
                  تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit} className="form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>الاسم *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>الشركة *</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>البريد الإلكتروني *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>رقم الهاتف *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>عدد الفواتير الشهرية (تقريباً)</Form.Label>
                  <Form.Select
                    name="invoices"
                    value={formData.invoices}
                    onChange={handleInputChange}
                  >
                    <option value="1-50">1 - 50 فاتورة</option>
                    <option value="51-100">51 - 100 فاتورة</option>
                    <option value="101-300">101 - 300 فاتورة</option>
                    <option value="301-500">301 - 500 فاتورة</option>
                    <option value="500+">أكثر من 500 فاتورة</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>نوع الخدمة المطلوبة</Form.Label>
                  <Form.Select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="basic">إدخال أساسي</option>
                    <option value="fast">خدمة سريعة</option>
                    <option value="advanced">خدمة متقدمة مع تصنيف</option>
                    <option value="enterprise">حل مؤسسي مخصص</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>تفاصيل إضافية</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="أخبرنا عن احتياجاتك الخاصة، نوع الفواتير، التوقيت المطلوب، أو أي ملاحظات أخرى..."
                  />
                </Form.Group>
                
                <Button type="submit" variant="primary" size="lg" className="w-100">
                  <FontAwesomeIcon icon={faCalculator} className="me-2" />
                  احصل على عرض السعر
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
