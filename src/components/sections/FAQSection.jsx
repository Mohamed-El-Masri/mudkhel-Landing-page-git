import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// FAQSection specific styles
import '../../styles/sections/FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "كيف أستخدم المنصة؟",
      answer: "📤 فقط قم برفع صورة أو PDF للفاتورة، وسيتم تحويلها تلقائياً إلى ملف Excel جاهز للتحميل خلال ثوانٍ."
    },
    {
      question: "هل الخدمة مجانية؟",
      answer: "🆓 يمكنك تجربة تحويل فاتورة واحدة مجاناً. بعد ذلك يمكنك اختيار الباقة الأنسب لك."
    },
    {
      question: "ما أنواع الملفات المدعومة؟",
      answer: "✅ تدعم المنصة جميع صيغ الصور (JPG, PNG) وملفات PDF للفواتير."
    },
    {
      question: "هل بياناتي آمنة؟",
      answer: "� نعم، جميع الملفات مشفرة ويتم حذفها تلقائياً من السيرفر بعد التحويل مباشرة."
    },
    {
      question: "هل يمكنني تحويل عدة فواتير دفعة واحدة؟",
      answer: "📑 نعم، باقات الأعمال والمؤسسات تدعم التحويل الجماعي ورفع عدة فواتير دفعة واحدة."
    },
    {
      question: "هل يمكن تخصيص قالب Excel؟",
      answer: "� نعم، يمكنك طلب قالب Excel مخصص حسب احتياجك في باقات الأعمال والمؤسسات."
    },
    {
      question: "هل تدعم المنصة الفواتير العربية والإنجليزية؟",
      answer: "🌐 نعم، الذكاء الاصطناعي يتعرف تلقائياً على الفواتير باللغتين العربية والإنجليزية."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <span className="title-icon">❓</span>
            أسئلة المتخصصين حول تقنيات OCR المتقدمة
          </h2>
          <p className="section-subtitle">
            إجابات شاملة من خبراء التقنية والمحاسبة حول كل ما يهمك معرفته عن تحويل الفواتير بالذكاء الاصطناعي
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
