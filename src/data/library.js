 export const statuses = {
  pending_payment: ['gold', 'clock', 'بانتظار الدفع'],
  under_review: ['info', 'search', 'قيد مراجعة الدفع'],
  review_late: ['danger', 'alert', 'مراجعة متأخّرة'],
  confirmed: ['success', 'checkcircle', 'مؤكَّد'],
  expired: ['muted', 'clock', 'انتهت المهلة'],
  rejected: ['danger', 'x', 'مرفوض'],
  cancelled: ['muted', 'xcircle', 'ملغى'],
  withdrawn: ['muted', 'logout', 'منسحب'],
  needs_action: ['danger', 'alert', 'يحتاج معالجة'],
  receipt_pending: ['info', 'image', 'إشعار: بانتظار المراجعة'],
  receipt_approved: ['success', 'check', 'إشعار: معتمَد'],
  receipt_rejected: ['danger', 'x', 'إشعار: مرفوض'],
  inst_paid: ['success', 'check', 'قسط: مسدَّد'],
  inst_partial: ['gold', 'wallet', 'قسط: جزئيّ'],
  inst_due: ['info', 'calendar', 'قسط: مستحقّ'],
  inst_late: ['danger', 'alert', 'قسط: متأخّر'],
  inst_upcoming: ['muted', 'clock', 'قسط: قادم'],
  seats_open: ['success', 'users', 'متاح'],
  seats_almost: ['gold', 'users', 'شبه مكتمل'],
  seats_full: ['muted', 'users', 'مكتمل'],
};

export const registrationStatuses = Object.keys(statuses).slice(0, 9);
export const statusGroups = [
  ['الإشعار', ['receipt_pending', 'receipt_approved', 'receipt_rejected']],
  ['القسط', ['inst_paid', 'inst_partial', 'inst_due', 'inst_late', 'inst_upcoming']],
  ['المقاعد للجمهور', ['seats_open', 'seats_almost', 'seats_full']],
];

export const buttonRows = [['أساسيّ', 'primary', 'أرسل الطلب'], ['ثانويّ', 'soft', 'التفاصيل'], ['خطِر-ثانويّ', 'danger', 'ألغِ التسجيل'], ['نصّيّ', 'ghost', 'تغيير الفرع']];
export const buttonStates = ['عاديّ', 'تركيز', 'معطَّل', 'تحميل'];

export const branches = ['غزّة للسيدات', 'النصيرات', 'دير البلح', 'خانيونس للسيدات'];
export const groupsChoices = [
  { id: 'a', label: 'السبت · الاثنين · الأربعاء', description: '10:00 ص – 1:00 م' },
  { id: 'b', label: 'الأحد · الثلاثاء · الخميس', description: '3:00 م – 6:00 م' },
];

export const requestSteps = ['الطلب', 'الدفع', 'المراجعة', 'التأكيد'];
export const tableRows = [
  { name: 'سارة أحمد', ref: 'AA-7K3Q-9XMD', program: 'الكوافير الشاملة', amount: 400, status: 'under_review' },
  { name: 'ريم خالد', ref: 'AA-4M8T-2PLC', program: 'العناية بالبشرة', amount: 600, status: 'pending_payment' },
  { name: 'لينا حسن', ref: 'AA-9R2W-6HBN', program: 'الكوافير الشاملة', amount: 1200, status: 'confirmed' },
  { name: 'محمّد يوسف', ref: 'AA-3J7D-8KQE', program: 'الحلاقة الرجاليّة', amount: 400, status: 'review_late' },
];
export const timelineEvents = [
  { tone: 'success', icon: 'checkcircle', what: 'اعتُمد الإشعار وأُكِّد المقعد', meta: 'لينا حسن · الثلاثاء 3:12 م' },
  { tone: 'danger', icon: 'x', what: 'رُفض الإشعار الأوّل', meta: 'لينا حسن · الثلاثاء 11:40 ص', why: 'الصورة غير واضحة، لا يظهر المبلغ.' },
  { tone: 'info', icon: 'image', what: 'رُفع إشعار تحويل', meta: 'سارة أحمد · الثلاثاء 11:05 ص' },
  { tone: 'gold', icon: 'clock', what: 'أُرسل الطلب وحُجز المقعد', meta: 'سارة أحمد · الاثنين 2:30 م' },
];
export const cancelEffects = [
  { icon: 'users', title: 'يُحرَّر المقعد', note: 'الكوافير الشاملة · غزّة للسيدات' },
  { icon: 'wallet', title: 'يبقى المدفوع رصيداً', note: 'دائن 400 ₪ للطالبة' },
  { icon: 'message', title: 'تصل رسالة إلغاء', note: '059 944 0919', ltr: true },
];
export const cancelReasons = ['طلب الطالبة', 'لم تُكمل الدفع', 'تكرار التسجيل', 'أخرى'];
export const filterOptions = [['الكلّ', 38], ['بانتظار الدفع', 9], ['قيد المراجعة', 12], ['مؤكَّد', 17]];

 export const libraryNav = [['buttons', 'الأزرار'], ['fields', 'الحقول'], ['status', 'الحالة'], ['request', 'صفحة الطلب'], ['cards', 'البطاقات'], ['table', 'الجدول'], ['timeline', 'الخطّ الزمنيّ'], ['upload', 'الرفع'], ['feedback', 'التنبيهات'], ['filters', 'المرشّحات']];
