import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import IconBlob from '../ui/IconBlob';
import Icon from '../ui/Icon';
import Pill from '../ui/Pill';
import { money } from '../../lib/format';

 export default function OldestInQueue({ item, onStart, className }) {
  return (
    <Card className={className}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs text-brand-500">الأقدم في الطابور · {item.since}</p>
          <h2 className="mt-3 text-3xl font-extrabold">{item.name}</h2>
          <p className="mt-3 flex items-center gap-2 text-xs text-ink-soft">
            <Icon name="pin" className="size-4 text-gold" />
            <b className="text-ink">{item.place}</b> · {item.course}
          </p>
        </div>
        <IconBlob name="image" tone="brand" size="lg" className="shrink-0" />
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <p className="text-xs text-ink-soft">أبلغ عنه عبر<br /><b className="text-sm text-ink">{item.method}</b></p>
        <p className="text-4xl font-extrabold">{money(item.amount)}</p>
      </div>

      <Pill tone="danger" icon="clock" className="mt-5">{item.deadline}</Pill>

      <div className="mt-6 flex items-center gap-4">
        <Button onClick={onStart}>ابدأ المراجعة</Button>
        <div className="flex-1">
          <p className="mb-1 flex justify-between text-[11px] text-ink-soft"><span>مراجعاتك اليوم</span><span><b className="text-gold">{item.reviewed}</b> من {item.total}</span></p>
          <div className="h-2 rounded-full bg-surface shadow-inset">
            <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${(item.reviewed / item.total) * 100}%` }} />
          </div>
        </div>
      </div>
    </Card>
  );
}
