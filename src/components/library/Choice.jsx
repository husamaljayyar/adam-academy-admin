import { cn } from '../../lib/cn';
import Icon from '../ui/Icon';

export function Checkbox({ label, ...props }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm">
      <input type="checkbox" className="peer sr-only" {...props} />
      <span className="grid size-5 shrink-0 place-items-center rounded-md bg-surface text-transparent shadow-inset peer-checked:text-brand-500 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400">
        <Icon name="check" className="size-3.5" />
      </span>
      {label}
    </label>
  );
}

 export function RadioCard({ label, description, ...props }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl bg-surface p-4 shadow-raised-sm has-[:checked]:shadow-inset">
      <span>
        <span className="block text-sm font-bold">{label}</span>
        <span className="text-xs text-ink-soft">{description}</span>
      </span>
      <input type="radio" className="peer sr-only" {...props} />
      <span className={cn('size-4 rounded-full bg-surface shadow-inset ring-offset-2 peer-checked:bg-brand-500 peer-checked:shadow-brand')} />
    </label>
  );
}
