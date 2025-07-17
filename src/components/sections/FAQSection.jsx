import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// FAQSection specific styles
import '../../styles/sections/FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "كيف تعمل تقنية OCR لمسح الفواتير؟",
      answer: "تستخدم منصتنا الذكاء الاصطناعي وتقنية Google Vision AI لتحليل الصور والتعرف على النصوص بدقة تفوق 99.5%. يتم استخراج البيانات المالية تلقائياً وتنظيمها في ملفات Excel."
    },
    {
      question: "ما مدى دقة تقنية OCR في قراءة الفواتير العربية؟",
      answer: "تحقق تقنيتنا دقة عالية جداً في قراءة النصوص العربية بفضل الخوارزميات المتخصصة. نستطيع التعامل مع خطوط مختلفة وحتى الفواتير ذات الجودة المنخفضة أو التالفة."
    },
    {
      question: "كم من الوقت تستغرق معالجة الفواتير؟",
      answer: "معالجة الفاتورة الواحدة تتم في أقل من 3 ثوانٍ. نظامنا السحابي يعمل على مدار الساعة بقدرة معالجة عالية للطلبات الكبيرة."
    },
    {
      question: "هل يمكن للنظام التعامل مع تنسيقات فواتير مختلفة؟",
      answer: "نعم، نظام OCR متطور يمكنه التعامل مع جميع تنسيقات الفواتير السعودية والدولية، بما في ذلك الفواتير المطبوعة والمكتوبة باليد والفواتير الإلكترونية."
    },
    {
      question: "كيف تضمنون الامتثال لمتطلبات ZATCA؟",
      answer: "منصتنا مصممة خصيصاً للامتثال الكامل لمعايير هيئة الزكاة والضريبة السعودية. نستخرج جميع البيانات المطلوبة للفاتورة الإلكترونية ونضمن التوافق مع المعايير الجديدة."
    },
    {
      question: "ما مستوى الأمان في معالجة البيانات الحساسة؟",
      answer: "نستخدم تشفير من الدرجة المصرفية ومعايير أمان عالمية. جميع البيانات محمية بنسخ احتياطية تلقائية، ونضمن خصوصية كاملة لمعلوماتك المالية."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <Container>
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faQuestionCircle} className="title-icon" />
            أسئلة تقنية شائعة
          </h2>
          <p className="section-subtitle">
            إجابات تقنية مفصلة حول تقنية OCR ومسح الفواتير بالذكاء الاصطناعي
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
