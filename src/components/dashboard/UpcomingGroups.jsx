import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import Pill from '../ui/Pill';
import Legend from '../ui/Legend';
import { StackedBar } from '../ui/Meter';

const legend = [
  { label: 'مؤكَّد', className: 'bg-brand-500' },
  { label: 'محجوز', className: 'bg-plum' },
  { label: 'قيد المراجعة', className: 'bg-gold' },
  { label: 'متاح', className: 'bg-white shadow-raised-sm' },
];

function GroupRow({ g }) {
  const segments = [
    { value: g.confirmed, className: 'bg-brand-500' },
    { value: g.booked, className: 'bg-plum' },
    { value: g.review, className: 'bg-gold' },
  ];
  return (
    <li className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 sm:grid-cols-[12.5rem_1fr_auto]">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-bold">{g.title}</p>
        <p className="text-[11px] text-ink-mute">{g.meta}</p>
      </div>
      <Pill tone={g.status.tone} icon="users" className="sm:order-3">{g.status.label}</Pill>
      <StackedBar segments={segments} total={g.total} className="col-span-2 sm:order-2 sm:col-span-1" />
    </li>
  );
}

export default function UpcomingGroups({ groups, pendingCount, className }) {
  return (
    <Card className={className}>
      <CardHeader icon="users" title="مقاعد المجموعات القادمة" action={<Button variant="link">الكلّ</Button>} />
      <ul className="mt-6 space-y-5">
        {groups.map((g) => <GroupRow key={g.title} g={g} />)}
      </ul>
      <Legend items={legend} className="mt-5" />
      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-ink-mute/15 pt-4 text-[11px] text-ink-soft">
        <p><b className="text-sm text-gold">{pendingCount}</b> حجوزاتٌ سارية بلا إشعار – أعلى من المعتاد (4)</p>
        <Button variant="soft" size="sm">اعرضها</Button>
      </footer>
    </Card>
  );
}
