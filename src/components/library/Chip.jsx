import { cn } from '../../lib/cn';

 export default function Chip({ selected, count, className, children, ...props }) {
  return (
    <button aria-pressed={!!selected} className={cn('inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-surface px-4 py-2 text-xs transition', selected ? 'font-bold text-brand-500 shadow-inset' : 'text-ink-soft shadow-raised-sm', className)} {...props}>
      {children}
      {count != null && <span className="text-[11px] text-ink-mute" dir="ltr">{count}</span>}
    </button>
  );
}

