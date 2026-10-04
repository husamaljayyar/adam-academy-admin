import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import BarColumn from '../ui/BarColumn';
import Legend from '../ui/Legend';

const legend = [
  { label: 'فات موعدها ولم تُسدَّد', className: 'bg-danger' },
  { label: 'اليوم', className: 'bg-brand-500' },
  { label: 'قادمة', className: 'bg-slate' },
];

export default function WeeklyDues({ days, className }) {
  const max = Math.max(...days.map((d) => d.value));
  return (
    <Card className={className}>
      <CardHeader icon="calendar" title="الأقساط المستحقّة هذا الأسبوع" action={<Button variant="link">الاستحقاقات</Button>} />
      <div className="mt-6 flex gap-1 sm:gap-2">
        {days.map((d) => <BarColumn key={d.date} max={max} {...d} />)}
      </div>
      <Legend items={legend} className="mt-5" />
    </Card>
  );
}
