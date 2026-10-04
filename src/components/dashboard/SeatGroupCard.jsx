import { Card } from '../ui/Card';
import IconBlob from '../ui/IconBlob';
import Icon from '../ui/Icon';
import Pill from '../ui/Pill';
import { StackedBar } from '../ui/Meter';

 export default function SeatGroupCard({ g }) {
  const parts = [
    { label: 'مؤكَّد', value: g.confirmed, dot: 'bg-brand-500' },
    { label: 'محجوز', value: g.booked, dot: 'bg-plum' },
    { label: 'قيد المراجعة', value: g.review, dot: 'bg-gold' },
  ];
  const free = g.capacity - g.confirmed - g.booked - g.review;
  return (
    <Card className="mt-6 text-center">
      <IconBlob name={g.icon} size="lg" className="-mt-11 mx-auto" />
      <h3 className="mt-3 text-lg font-extrabold">{g.title}</h3>
      <p className="mt-1 text-[11px] text-ink-mute">{g.meta}</p>

      <StackedBar total={g.capacity} segments={parts.map((p) => ({ value: p.value, className: p.dot }))} className="mt-4" />
      <ul className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-ink-soft">
        {parts.map((p) => (
          <li key={p.label} className="flex items-center gap-1">
            <span className={`size-2 rounded-full ${p.dot}`} />{p.label} <b className="text-ink">{p.value}</b>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-ink-soft">متاح <b className="text-ink">{free}</b> من {g.capacity}</p>

      <footer className="mt-4 flex items-center justify-between gap-2 text-[11px] text-ink-soft">
        <Pill tone={g.status.tone} icon="users">{g.status.label}</Pill>
        <span className="flex items-center gap-1"><Icon name="calendar" className="size-3.5" />{g.starts}</span>
      </footer>
    </Card>
  );
}
