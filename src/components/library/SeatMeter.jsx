import { StackedBar } from '../ui/Meter';
import Legend from '../ui/Legend';

 export default function SeatMeter({ confirmed, held, review, capacity }) {
  const free = capacity - confirmed - held - review;
  const items = [
    ['مؤكَّد', confirmed, 'bg-brand-500'], ['محجوز', held, 'bg-plum'], ['قيد المراجعة', review, 'bg-gold'],
  ];
  return (
    <div className="space-y-2">
      <StackedBar total={capacity} segments={items.map(([, value, className]) => ({ value, className }))} />
      <Legend items={[...items.map(([l, n, className]) => ({ label: `${l} ${n}`, className })), { label: `متاح ${free}`, className: 'bg-surface shadow-inset' }, { label: `من ${capacity}` }]} />
    </div>
  );
}
