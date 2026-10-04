import { Card, CardHeader } from '../ui/Card';
import { toneText } from '../../lib/tones';
import { cn } from '../../lib/cn';

 export default function QueueAlert({ icon, tone, title, count, name, place, time, note }) {
  return (
    <Card>
      <CardHeader icon={icon} iconTone={tone} title={<>{title} <span className={toneText[tone]}>{count}</span></>} />
      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-surface p-4 shadow-inset">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{name}</p>
          <p className="text-[11px] text-ink-soft">{place}</p>
        </div>
        <div className="text-end">
          <p className={cn('text-sm font-bold', toneText[tone])}>{time}</p>
          <p className="text-[11px] text-ink-soft">{note}</p>
        </div>
      </div>
    </Card>
  );
}
