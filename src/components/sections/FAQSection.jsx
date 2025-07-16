import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// FAQSection specific styles
import '../../styles/sections/FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "كيف أرسل فواتيري لكم؟",
      answer: "📤 يمكنك إرسال الفواتير عبر البريد الإلكتروني أو واتساب، أو تسليمها شخصياً في مكتبنا. نقبل الفواتير المصورة أو الأصلية."
    },
    {
      question: "كم يستغرق إنجاز العمل؟",
      answer: "⏰ عادة خلال 24 ساعة للباقة العادية، و12 ساعة للباقة السريعة. للطلبات الكبيرة نحدد موعد تسليم مناسب مسبقاً."
    },
    {
      question: "هل تتعاملون مع جميع أنواع الفواتير؟",
      answer: "✅ نعم، نتعامل مع جميع أنواع الفواتير (مبيعات، مشتريات، خدمات) والإيصالات باللغتين العربية والإنجليزية."
    },
    {
      question: "ما هو تنسيق الملف الذي سأستلمه؟",
      answer: "📊 نسلم ملف Excel منظم مع تصنيف البيانات (التاريخ، المبلغ، المورد، نوع المصروف) حسب احتياجاتك."
    },
    {
      question: "هل خدمتكم متوافقة مع متطلبات ZATCA؟",
      answer: "🏛️ نعم، جميع ملفاتنا متوافقة مع متطلبات هيئة الزكاة والضريبة السعودية ومعايير الفاتورة الإلكترونية."
    },
    {
      question: "هل يمكنني طلب تعديل على الملف بعد التسليم؟",
      answer: "🔄 نعم، نقدم تعديلات مجانية خلال 48 ساعة من التسليم لضمان رضاك التام عن النتيجة."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">❓</span>
            الأسئلة الشائعة
          </h2>
          <p className="section-subtitle">
            إجابات على أكثر الأسئلة شيوعاً حول مُدخِل
          </p>
        </div>

        <Row>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  eventKey={index.toString()} 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <Accordion.Header>
                    <h5 className="mb-0">{faq.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
