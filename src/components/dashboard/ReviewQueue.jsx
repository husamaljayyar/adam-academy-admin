import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import Icon from '../ui/Icon';
import Ring from '../ui/Ring';
import Legend from '../ui/Legend';
import { CountSegments } from '../ui/Meter';

const legend = [
  { label: 'ضمن المهلة', className: 'bg-brand-500' },
  { label: 'قاربت مهلتها', className: 'bg-gold' },
  { label: 'متأخرة', className: 'bg-danger' },
];

export default function ReviewQueue({ waiting, queueMax, reviewed, total, counts, next, className }) {
  return (
    <Card className={className}>
      <CardHeader icon="image" solid title="طابور المراجعة" action={<Button variant="link">افتح الطابور</Button>} />
      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
        <Ring value={waiting} max={queueMax} stroke={8.5} className="w-44 shrink-0">
          <div>
            <p className="text-5xl font-extrabold leading-none">{waiting}</p>
            <p className="mt-1 text-[11px] text-ink-soft">بانتظار المراجعة</p>
          </div>
        </Ring>

        <div className="w-full min-w-0 flex-1 space-y-3">
          <p className="text-xs text-ink-soft">راجعتِ {reviewed} من {total} اليوم</p>
          <CountSegments items={counts} />
          <Legend items={legend} />

          <div className="flex items-center justify-between gap-3 rounded-2xl bg-brand-50 p-4 shadow-inset">
            <div className="min-w-0">
              <p className="text-[11px] text-ink-soft">التالي · {next.since}</p>
              <p className="text-base font-bold">{next.name}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs">
                <Icon name="pin" className="size-3.5 text-brand-500" />
                {next.place}
              </p>
            </div>
            <p className="text-sm font-bold text-brand-500">{next.amount} ₪</p>
          </div>

          <Button className="w-full">ابدأ المراجعة</Button>
        </div>
      </div>
    </Card>
  );
}
