import { cn } from '../../lib/cn';

 export function StackedBar({ segments, total, className }) {
  return (
    <div className={cn('flex h-3 gap-0.5 rounded-full bg-surface p-px shadow-inset', className)} role="img">
      {segments.map((s, i) => (
        <span key={i} className={cn('h-full rounded-full', s.className)} style={{ width: `${(s.value / total) * 100}%` }} />
      ))}
    </div>
  );
}

const segmentTones = {
  brand: 'bg-brand-gradient text-white shadow-brand',
  gold: 'bg-gold-soft text-gold',
  danger: 'bg-danger-soft text-danger',
};

 export function CountSegments({ items }) {
  return (
    <div className="flex gap-2">
      {items.map((it) => (
        <span key={it.tone} style={{ flex: `${it.value} 1 3.5rem` }} className={cn('grid h-9 place-items-center rounded-full text-xs font-bold', segmentTones[it.tone])}>
          {it.value}
        </span>
      ))}
    </div>
  );
}
