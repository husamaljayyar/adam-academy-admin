import { cn } from '../../lib/cn';

 const fills = { overdue: 'bg-danger', today: 'bg-brand-500', upcoming: 'bg-slate' };

export default function BarColumn({ value, max, date, day, status }) {
  const today = status === 'today';
  return (
    <div className={cn('flex flex-1 flex-col items-center gap-2 rounded-2xl px-1 py-3', today && 'bg-surface shadow-raised-sm')}>
      <span className={cn('text-xs font-medium', today && 'text-brand-500')}>{value}</span>
      <div className="flex h-28 w-2.5 items-end rounded-full bg-surface shadow-inset sm:h-32">
        <span className={cn('w-full rounded-full', fills[status])} style={{ height: `${(value / max) * 100}%` }} />
      </div>
      <span className={cn('text-xs', today && 'font-bold text-brand-500')}>{date}</span>
      <span className={cn('text-[10px] text-ink-soft', today && 'font-bold text-brand-500')}>{day}</span>
    </div>
  );
}
