import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import Icon from '../ui/Icon';
import Tag from './Tag';
import { money } from '../../lib/format';

 export default function CourseCard({ title, category, duration, startDate, place = 'حضوريّ', seatsLeft, seatsTotal, price }) {
  const meta = [['clock', duration], ['calendar', startDate], ['pin', place]];
  return (
    <Card className="flex flex-col gap-4">
      <div className="h-32 rounded-2xl bg-surface p-3 shadow-inset"><Tag tone="gold">{category}</Tag></div>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
        {meta.map(([icon, text]) => <li key={icon} className="flex items-center gap-1"><Icon name={icon} className="size-3.5" />{text}</li>)}
      </ul>
      <div className="space-y-1 text-xs">
        <p className="flex justify-between"><span>المقاعد</span><span dir="ltr">{seatsTotal - seatsLeft} / {seatsTotal}</span></p>
        <div className="h-2 rounded-full bg-surface shadow-inset"><span className="block h-full rounded-full bg-brand-500" style={{ width: `${((seatsTotal - seatsLeft) / seatsTotal) * 100}%` }} /></div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div><p className="text-lg font-extrabold" dir="ltr">{money(price)}</p><p className="text-[11px] text-ink-mute">للدورة كاملة</p></div>
        <div className="flex gap-2"><Button variant="ghost" size="sm">التفاصيل</Button><Button size="sm">احجزي مقعدك</Button></div>
      </div>
    </Card>
  );
}
