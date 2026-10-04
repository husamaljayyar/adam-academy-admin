 export const navItems = [
  { label: 'الرئيسيّة', icon: 'star', href: '#/', path: '/' },
  { label: 'الإشعارات', icon: 'image', href: '#/queue', path: '/queue', badge: 5 },
  { label: 'التسجيلات', icon: 'message', href: '#/' },
  { label: 'الأقساط', icon: 'wallet', href: '#/' },
  { label: 'العملاء', icon: 'users', href: '#/' },
];

export const activity = [
  { icon: 'image', tone: 'info', title: 'رفعت سلمى ناصر إشعاراً', time: 'منذ 12 دقيقة' },
  { icon: 'check', tone: 'success', title: 'اعتمدت ريم إشعار لينا', time: 'منذ 25 دقيقة' },
  { icon: 'alert', tone: 'danger', title: 'عُكست دفعة – تحتاج معالجة', time: 'منذ ساعة' },
  { icon: 'user', tone: 'gold', title: 'تسجيلٌ جديد: لينا حسن', time: 'منذ ساعتين' },
  { icon: 'wallet', tone: 'success', title: 'سُجّل قسطٌ يدويّ لعمر', time: 'منذ 3 ساعات' },
];

export const weekDues = [
  { value: 4, date: '26', day: 'السبت', status: 'overdue' },
  { value: 6, date: '27', day: 'الأحد', status: 'overdue' },
  { value: 7, date: '28', day: 'الإثنين', status: 'today' },
  { value: 3, date: '29', day: 'الثلاثاء', status: 'upcoming' },
  { value: 5, date: '30', day: 'الأربعاء', status: 'upcoming' },
  { value: 2, date: '1', day: 'الخميس', status: 'upcoming' },
  { value: 0, date: '2', day: 'الجمعة', status: 'upcoming' },
];

 export const groups = [
  { title: 'الكوافير الشاملة', meta: 'غزّة للسيدات · 14 أكتوبر', status: { label: 'شبه مكتمل', tone: 'gold' }, total: 100, confirmed: 47, booked: 16, review: 12 },
  { title: 'العناية بالبشرة الاحترافيّة', meta: 'النصيرات · 17 أكتوبر', status: { label: 'متاح', tone: 'success' }, total: 100, confirmed: 44, booked: 14, review: 10 },
  { title: 'الحلاقة الرجاليّة', meta: 'غزّة للرجال · 12 أكتوبر', status: { label: 'مكتمل', tone: 'muted' }, total: 100, confirmed: 88, booked: 5, review: 5 },
];

 export const flow = ['الرئيسيّة', 'الطابور', 'المراجعة', 'الاعتماد أو الرفض', 'التالي'];
