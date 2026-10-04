 export const branchKinds = { women: 'plum', men: 'gold', other: 'slate' }; // نوع الفرع ← لون الأيقونة

export const methods = ['جوّال باي', 'بنك فلسطين', 'PalPay'];

export const queueItems = [
  { id: 'q1', name: 'محمّد يوسف', branch: 'غزّة للرجال', kind: 'men', program: 'الحلاقة الرجاليّة', start: '12 أكتوبر', amount: 400, method: 'بنك فلسطين', minutes: 300, deadline: 'late' },
  { id: 'q2', name: 'سارة أحمد', branch: 'غزّة للسيدات', kind: 'women', program: 'الكوافير الشاملة', start: '14 أكتوبر', amount: 400, method: 'جوّال باي', minutes: 120, deadline: 'soon', duplicate: true },
  { id: 'q3', name: 'عمر سعيد', branch: 'غزّة للرجال', kind: 'men', program: 'الحلاقة الرجاليّة', start: '12 أكتوبر', amount: 400, method: 'جوّال باي', minutes: 90, reviewer: 'ريم' },
  { id: 'q4', name: 'لينا حسن', branch: 'النصيرات', kind: 'other', program: 'العناية بالبشرة الاحترافيّة', start: '17 أكتوبر', amount: 600, method: 'PalPay', minutes: 40, pdf: true },
  { id: 'q5', name: 'سلمى ناصر', branch: 'غزّة للسيدات', kind: 'women', program: 'الكوافير الشاملة', start: '14 أكتوبر', amount: 350, method: 'جوّال باي', minutes: 12 },
];

 export const queueFilters = [
  { id: 'all', label: 'الكلّ', test: () => true },
  { id: 'soon', label: 'قاربت المهلة', test: (i) => i.deadline === 'soon' },
  { id: 'late', label: 'متأخّرة', test: (i) => i.deadline === 'late' },
  { id: 'duplicate', label: 'تنبيه تكرار', test: (i) => i.duplicate },
];

 export const queueFlow = ['الطابور', 'المراجعة', 'الاعتماد أو الرفض', 'التالي'];
export const queueSims = [['المحاكاة: عاديّ', 'ready'], ['الطابور فارغ', 'empty'], ['الطابور قيد التحميل', 'loading']];
