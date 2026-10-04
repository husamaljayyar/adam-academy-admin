 export const stats = [
  { icon: 'image', tone: 'brand', value: 5, label: 'بانتظار المراجعة' },
  { icon: 'clock', tone: 'gold', value: 1, label: 'قاربت مهلتها' },
  { icon: 'alert', tone: 'danger', value: 1, label: 'مراجعة متأخّرة' },
  { icon: 'calendar', tone: 'danger', value: 7, label: 'أقساطٌ مستحقّة اليوم' },
  { icon: 'wallet', tone: 'danger', value: 12, label: 'متأخّرات' },
  { icon: 'message', tone: 'danger', value: 3, label: 'تسجيلات تحتاج معالجة' },
];

export const oldest = {
  since: 'منذ 5 ساعات', name: 'محمّد يوسف', place: 'غزّة للرجال', course: 'الحلاقة الرجاليّة · الأحد 12 أكتوبر',
  amount: 400, method: 'بنك فلسطين', deadline: 'مهلة المراجعة 1:40 م · انتهت منذ 25 دقيقة', reviewed: 8, total: 13,
};

export const alerts = [
  { icon: 'alert', tone: 'danger', title: 'مراجعة متأخّرة', count: 1, name: 'محمّد يوسف', place: 'غزّة للرجال · 400 ₪', time: '1:40 م', note: 'انتهت منذ 25 دقيقة' },
  { icon: 'clock', tone: 'gold', title: 'قاربت مهلتها', count: 1, name: 'سارة أحمد', place: 'غزّة للسيدات · 400 ₪', time: '2:50 م', note: 'بعد 45 دقيقة' },
];

 export const seatGroups = [
  { icon: 'scissors', title: 'الكوافير الشاملة', meta: 'غزّة للسيدات · الأربعاء 14 أكتوبر', status: { label: 'شبه مكتمل', tone: 'gold' }, capacity: 25, confirmed: 12, booked: 4, review: 3, starts: 'تبدأ بعد 16 يوماً' },
  { icon: 'brush', title: 'العناية بالبشرة الاحترافيّة', meta: 'النصيرات · السبت 17 أكتوبر', status: { label: 'متاح', tone: 'success' }, capacity: 20, confirmed: 9, booked: 3, review: 2, starts: 'تبدأ بعد 19 يوماً' },
  { icon: 'comb', title: 'الحلاقة الرجاليّة', meta: 'غزّة للرجال · الأحد 12 أكتوبر', status: { label: 'مكتمل', tone: 'muted' }, capacity: 20, confirmed: 18, booked: 1, review: 1, starts: 'تبدأ بعد 14 يوماً' },
];

export const feed = [
  { icon: 'image', tone: 'info', title: 'رفعت سلمى ناصر إشعاراً', time: 'غزّة للسيدات · منذ 12 دقيقة' },
  { icon: 'check', tone: 'success', title: 'اعتمدت ريم إشعاراً وأكّد مقعد', time: 'الكوافير الشاملة · منذ 25 دقيقة' },
  { icon: 'alert', tone: 'danger', title: 'عُكست دفعة – تحتاج معالجة', time: 'AA-6H2K-7TQB · منذ ساعة' },
  { icon: 'user', tone: 'gold', title: 'تسجيلٌ جديد: لينا حسن', time: 'النصيرات · منذ ساعتين' },
];

export const pendingBookings = { count: 9, average: 4 };
