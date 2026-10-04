import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';

 export const Skeleton = ({ className }) => <span className={cn('block animate-pulse rounded-full bg-ink-mute/15', className)} />;

 export function EmptyState({ icon, title, text, action }) {
  return (
    <div className="grid h-full min-h-40 place-items-center text-center">
      <div className="space-y-3">
        <span className="mx-auto grid size-12 place-items-center rounded-blob bg-surface text-brand-500 shadow-raised-sm"><Icon name={icon} className="size-5" /></span>
        <p className="text-sm font-bold">{title}</p>
        {text && <p className="text-xs text-ink-soft">{text}</p>}
        {action}
      </div>
    </div>
  );
}
