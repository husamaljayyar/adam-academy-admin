import { cn } from '../../lib/cn';

 export default function Legend({ items, className }) {
  return (
    <ul className={cn('flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-soft', className)}>
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5">
          <span className={cn('size-2.5 rounded-full', it.className)} />
          {it.label}
        </li>
      ))}
    </ul>
  );
}
