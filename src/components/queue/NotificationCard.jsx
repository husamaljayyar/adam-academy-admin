import BranchLine from './BranchLine';
import Pill from '../ui/Pill';
import { Money } from '../library/RefCode';
import { Skeleton } from '../library/Skeleton';
import { ago } from '../../lib/format';
import { cn } from '../../lib/cn';

 const flags = (n) => [
  n.deadline === 'late' && { tone: 'danger', text: 'مهلة المراجعة متأخّرة' },
  n.deadline === 'soon' && { tone: 'gold', text: 'قاربت المهلة' },
  n.duplicate && { tone: 'gold', text: 'صورة مكرّرة' },
  n.pdf && { tone: 'muted', text: 'PDF' },
  n.reviewer && { tone: 'info', text: `تراجعها ${n.reviewer} الآن` }, // لتجنّب العمل المزدوج
].filter(Boolean);

 export default function NotificationCard({ item, onOpen }) {
  const taken = !!item.reviewer;
  return (
    <button
      type="button"
      onClick={() => onOpen?.(item)}
      aria-label={`راجع إشعار ${item.name}، ${item.branch}`}
      className="flex w-full flex-col gap-3 rounded-petal-lg bg-surface px-6 py-5 text-start shadow-raised-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-raised-md active:translate-y-0 active:shadow-inset motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <BranchLine name={item.branch} kind={item.kind} extra={`${item.program} · ${item.start}`} />
      <span className={cn('text-xl font-bold', taken && 'text-ink-soft')}>{item.name}</span>
      <span className="flex items-center justify-between gap-3 text-xs text-ink-soft">
        <span><b className="text-sm text-ink"><Money value={item.amount} /></b> · {item.method}</span>
        <span>{ago(item.minutes)}</span>
      </span>
      <span className="flex min-h-[30px] flex-wrap gap-2">
        {flags(item).map((f) => <Pill key={f.text} tone={f.tone} dot>{f.text}</Pill>)}
      </span>
    </button>
  );
}

 export function NotificationCardSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3 rounded-petal-lg bg-surface px-6 py-5 shadow-raised-sm">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-6 w-2/5" />
      <Skeleton className="h-4 w-3/5" />
      <Skeleton className="h-[30px] w-28" />
    </div>
  );
}
