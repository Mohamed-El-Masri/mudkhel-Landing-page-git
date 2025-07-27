# 📧 تعليمات إعداد استقبال رسائل الفورم

## اختر الطريقة المناسبة لك:

---

## الطريقة الأولى: Formspree (الأسهل - مُوصى بها)

### المميزات:
- ✅ سهل جداً في الإعداد (5 دقائق)
- ✅ مجاني حتى 50 رسالة شهرياً
- ✅ لا يحتاج برمجة معقدة
- ✅ يصل الإيميل مباشرة لـ ammarlologeass@gmail.com

### خطوات الإعداد:

#### 1. إنشاء الحساب
1. اذهب إلى https://formspree.io/
2. اضغط "Get Started"
3. أنشئ حساب بإيميل ammarlologeass@gmail.com (أو أي إيميل آخر)

#### 2. إنشاء فورم جديد
1. بعد تسجيل الدخول، اضغط "New Form"
2. أدخل الاسم: "مُدخِل - نموذج الاتصال"
3. أدخل الإيميل: ammarlologeass@gmail.com
4. اضغط "Create Form"

#### 3. الحصول على رابط الفورم
- ستحصل على رابط مثل: `https://formspree.io/f/abcd1234`
- انسخ هذا الرابط

#### 4. تحديث الكود
في ملف `ContactSection.jsx` (السطر 40 تقريباً)، غيّر:
```jsx
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```
إلى:
```jsx
const formspreeEndpoint = 'https://formspree.io/f/abcd1234'; // الرابط الذي حصلت عليه
```

#### 5. اختبار الفورم
1. احفظ التغييرات وشغّل الموقع: `npm start`
2. اذهب إلى صفحة التواصل وأرسل رسالة تجريبية
3. تحقق من إيميل ammarlologeass@gmail.com

---

## الطريقة الثانية: EmailJS (أكثر تحكماً)

### المميزات:
- ✅ تحكم أكبر في تصميم الإيميل
- ✅ 200 إيميل مجاناً شهرياً
- ✅ إمكانية إرسال إيميل تأكيد للمرسل

### خطوات الإعداد:

#### 1. إنشاء الحساب
1. اذهب إلى https://www.emailjs.com/
2. أنشئ حساب مجاني

#### 2. إعداد خدمة الإيميل
1. اذهب إلى "Email Services"
2. اضغط "Add New Service"
3. اختر "Gmail"
4. ستحتاج إلى:
   - إيميل: ammarlologeass@gmail.com
   - كلمة مرور التطبيق (App Password) من جوجل

#### 3. إعداد كلمة مرور التطبيق في جوجل
1. اذهب إلى https://myaccount.google.com/
2. أمان (Security) → التحقق بخطوتين (2-Step Verification)
3. فعّل التحقق بخطوتين إذا لم يكن مفعلاً
4. ابحث عن "App passwords"
5. أنشئ كلمة مرور جديدة للتطبيق
6. انسخ كلمة المرور (16 رقم)

#### 4. أكمل إعداد EmailJS
- أدخل كلمة مرور التطبيق في EmailJS
- احفظ واحصل على Service ID

#### 5. إنشاء قالب الإيميل
1. اذهب إلى "Email Templates"
2. اضغط "Create New Template"
3. استخدم هذا القالب:

**Subject:** طلب جديد من موقع مُدخِل - {{from_name}}

**Content:**
```
مرحباً،

وصلك طلب جديد من موقع مُدخِل:

الاسم: {{from_name}}
الإيميل: {{from_email}}  
الهاتف: {{phone}}
التاريخ: {{date}}

الرسالة:
{{message}}

---
يمكنك الرد مباشرة على هذا الإيميل: {{reply_to}}

تم إرسال هذه الرسالة تلقائياً من موقع مُدخِل
```

#### 6. تحديث ملف .env
أنشئ/حدّث ملف `.env` في جذر المشروع:
```
REACT_APP_EMAILJS_SERVICE_ID=service_your_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## الطريقة الثالثة: Netlify Forms (مجاني 100%)

### إذا كان الموقع سيتم رفعه على Netlify:

#### 1. في ملف ContactSection.jsx، غيّر:
```jsx
<Form onSubmit={handleSubmit} className="form">
```
إلى:
```jsx
<Form onSubmit={handleSubmit} className="form" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
```

#### 2. في handleSubmit، استخدم:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const formData = new FormData(e.target);
  
  try {
    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });
    
    setAlertType('success');
    setAlertMessage('تم إرسال رسالتك بنجاح!');
    setShowAlert(true);
  } catch (error) {
    setAlertType('danger');
    setAlertMessage('حدث خطأ في الإرسال');
    setShowAlert(true);
  }
  
  setIsLoading(false);
};
```

---

## أيهما أختار؟

### للمبتدئين: **Formspree** 
- أسهل وأسرع
- جاهز خلال 5 دقائق

### للمطورين: **EmailJS**
- تحكم أكبر
- قوالب إيميل مخصصة

### للمواقع على Netlify: **Netlify Forms**
- مجاني 100%
- مدمج مع الاستضافة

---

## ملاحظات مهمة:

1. **احفظ ملف .env.example** مع قيم وهمية للمطورين الآخرين
2. **لا تشارك ملف .env** في Git - مُدرج في .gitignore
3. **اختبر الفورم** قبل النشر النهائي
4. **تحقق من مجلد spam** في الإيميل
5. **ضع رقم هاتف حقيقي** في معلومات التواصل

## للمساعدة:
إذا واجهت أي مشكلة، تواصل معي وسأساعدك في الإعداد خطوة بخطوة.
