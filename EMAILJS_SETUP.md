# إعداد EmailJS لإرسال الفورم إلى الإيميل

## الخطوات المطلوبة:

### 1. إنشاء حساب EmailJS
1. اذهب إلى https://www.emailjs.com/
2. قم بإنشاء حساب مجاني
3. ستحصل على 200 إيميل مجاناً شهرياً

### 2. إعداد الخدمة (Service)
1. في لوحة التحكم، اذهب إلى "Email Services"
2. اضغط "Add New Service"
3. اختر "Gmail" (أو أي مزود إيميل آخر)
4. أدخل بيانات إيميل ammarlologeass@gmail.com
5. احفظ الـ Service ID (مثل: service_abc123)

### 3. إنشاء القالب (Template)
1. اذهب إلى "Email Templates"
2. اضغط "Create New Template"
3. استخدم هذا القالب:

```
الموضوع: طلب جديد من موقع مُدخِل

المرسل: {{from_name}}
الإيميل: {{from_email}}
الهاتف: {{phone}}
التاريخ: {{date}}

الرسالة:
{{message}}

---
تم إرسال هذه الرسالة من موقع مُدخِل
```

4. احفظ الـ Template ID (مثل: template_xyz789)

### 4. الحصول على Public Key
1. اذهب إلى "Account" -> "General"
2. انسخ الـ Public Key

### 5. تحديث ملف .env
قم بتحديث الملف `.env` في جذر المشروع:

```
REACT_APP_EMAILJS_SERVICE_ID=service_your_actual_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_actual_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. إعادة تشغيل السيرفر
```bash
npm start
```

## البدائل الأخرى:

### استخدام Formspree (أسهل)
إذا كنت تريد حلاً أبسط:

1. اذهب إلى https://formspree.io/
2. أنشئ حساب مجاني
3. أنشئ فورم جديد واستخدم إيميل ammarlologeass@gmail.com
4. ستحصل على رابط endpoint
5. غيّر في الكود:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setAlertType('success');
      setAlertMessage('تم إرسال رسالتك بنجاح!');
      // إعادة تعيين النموذج
    }
  } catch (error) {
    setAlertType('danger');
    setAlertMessage('حدث خطأ في الإرسال');
  }
  
  setIsLoading(false);
};
```

### استخدام Netlify Forms (إذا كان الموقع على Netlify)
أضف `netlify` إلى تاج الفورم:
```jsx
<Form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
```

## أيهما أفضل؟
- **EmailJS**: أكثر مرونة وتحكم في التصميم
- **Formspree**: أبسط في الإعداد
- **Netlify Forms**: مجاني تماماً إذا كان الموقع على Netlify

أنصح بـ EmailJS للمشاريع الاحترافية.
