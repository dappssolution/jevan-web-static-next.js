export interface Faq {
  question: string;
  answer: string;
}

export interface FaqSectionTexts {
  [key: string]: {
    subtitle: string;
    title: string;
    description: string;
    bgText: string;
    faqs: Faq[];
  };
}

export const faqSectionTexts: FaqSectionTexts = {
  en: {
    subtitle: "FAQs",
    title: "Frequently Asked Questions",
    description: "Have questions about our services? We've compiled answers to common inquiries about our modifications, pricing, and process.",
    bgText: "FAQS",
    faqs: [
      {
        question: "What kind of car modifications do you specialize in?",
        answer: "We specialize in all types of interior and exterior work. Our main focus is comprehensive interior transformation, including custom seat upholstery, sound systems, navigation installation, and floor lamination. We also handle window tinting, headlight polishing, and camera fixing."
      },
      {
        question: "How long does a custom upholstery job take?",
        answer: "The timeline depends on the complexity of the design and the type of vehicle. A simple seat cover installation can be done quickly, while a full-scale custom re-upholstery project may take several days. We recommend visiting our showroom for a precise time and cost estimate."
      },
      {
        question: "Do I need an appointment to get a quote?",
        answer: "Appointments are recommended but not required. You are welcome to visit our showroom in Umm Ramool, Rashidiya, to discuss your project with our team. We can show you material samples and provide a detailed quote based on your needs."
      },
      {
        question: "What are your opening hours?",
        answer: "Our showroom is open from 9:00 AM to 9:00 PM, Saturday to Thursday. We are closed on Fridays. You can also reach us by phone or WhatsApp during our business hours."
      }
    ]
  },
  ar: {
    subtitle: "الأسئلة الشائعة",
    title: "الأسئلة الأكثر شيوعًا",
    description: "هل لديك أسئلة حول خدماتنا؟ لقد جمعنا إجابات لأكثر الاستفسارات شيوعًا حول التعديلات والأسعار والإجراءات.",
    bgText: "الأسئلة الشائعة",
    faqs: [
      {
        question: "ما أنواع تعديلات السيارات التي تتخصصون بها؟",
        answer: "نحن متخصصون في جميع أنواع الأعمال الداخلية والخارجية. تركيزنا الرئيسي هو التحويل الداخلي الشامل، بما في ذلك تنجيد المقاعد المخصص، وأنظمة الصوت، وتركيب أنظمة الملاحة، وتغليف الأرضيات. كما نقوم بتظليل النوافذ وتلميع المصابيح الأمامية وإصلاح الكاميرات."
      },
      {
        question: "كم يستغرق تنفيذ تنجيد مخصص للمقاعد؟",
        answer: "يعتمد الوقت على مدى تعقيد التصميم ونوع السيارة. يمكن تركيب غطاء مقعد بسيط بسرعة، بينما قد يستغرق مشروع إعادة التنجيد الكامل عدة أيام. ننصح بزيارة معرضنا للحصول على تقدير دقيق للوقت والتكلفة."
      },
      {
        question: "هل أحتاج إلى موعد للحصول على عرض سعر؟",
        answer: "يفضل تحديد موعد ولكن ليس إلزاميًا. يمكنك زيارة معرضنا في أم رمول، الراشدية، لمناقشة مشروعك مع فريقنا. يمكننا عرض عينات المواد وتقديم عرض سعر مفصل بناءً على احتياجاتك."
      },
      {
        question: "ما هي ساعات العمل لديكم؟",
        answer: "معرضنا مفتوح من الساعة 9:00 صباحًا حتى 9:00 مساءً، من السبت إلى الخميس. نحن مغلقون يوم الجمعة. يمكنك أيضًا التواصل معنا عبر الهاتف أو الواتساب خلال ساعات العمل."
      }
    ]
  }
};
