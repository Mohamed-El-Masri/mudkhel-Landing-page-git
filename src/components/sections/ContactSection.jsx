import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ContactSection specific styles
import '../../styles/sections/ContactSection.css';

import { 
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
            <span className="title-icon">🚀</span>
            ابدأ بـ 50 فاتورة مجانية أو احصل على استشارة متخصصة
          </h2>
          <p className="section-subtitle">
            جرب تحويل 50 فاتورة مجاناً واكتشف بنفسك لماذا تثق بنا أكثر من 50 شركة.
          </p>
        </div>

        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="contact-info">
              <h3>ابدأ رحلتك مع التحويل الذكي للفواتير</h3>
              <p className="contact-intro">
                <strong>تجربة 50 فاتورة مجانية:</strong> ارفع 50 فاتورة مجاناً واختبر دقة وسرعة التحويل بنفسك. 
                أو تواصل مع خبرائنا للحصول على استشارة مخصصة حول احتياجات شركتك وأفضل حل مناسب لك.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="contact-details">
                    <h5>واتساب (استجابة فورية)</h5>
                    <a href="https://wa.me/+966500000000">+966 50 000 0000</a>
                    <span className="contact-note">تجربة مجانية فورية + استشارة متخصصة</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-details">
                    <h5>دعم تقني متخصص</h5>
                    <a href="mailto:service@mudakhil.com">service@mudakhil.com</a>
                    <span className="contact-note">تجربة مجانية فورية + استشارة متخصصة</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-details">
                    <h5>رقم الهاتف</h5>
                    <a href="tel:+966112345678">+966 11 234 5678</a>
                    <span className="contact-note">دعم فني مباشر</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="contact-form">
              <h4 className="form-title">اطلب تجربة مجانية أو استشارة</h4>
              <p className="form-subtitle">أخبرنا عن احتياجك أو ارفع فاتورة لتجربة التحويل الذكي مجاناً</p>
              
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
                  <Form.Label>البريد الإلكتروني *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>رسالتك</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </Form.Group>
                
                <Button type="submit" variant="primary" size="lg" className="w-100">
                      إرسال
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
