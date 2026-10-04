import Icon from './Icon';
import { cn } from '../../lib/cn';

const box = 'flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 text-sm shadow-inset focus-within:ring-2 focus-within:ring-brand-200';

export function SearchField({ className, ...props }) {
  return (
    <label className={cn(box, className)}>
      <Icon name="search" className="size-4 shrink-0 text-brand-500" />
      <input type="search" className="w-full bg-transparent outline-none placeholder:text-ink-mute" {...props} />
    </label>
  );
}

export function SelectField({ icon = 'pin', options, className, ...props }) {
  return (
    <label className={cn(box, 'relative', className)}>
      {icon && <Icon name={icon} className="size-4 shrink-0 text-brand-500" />}
      <select className="w-full appearance-none bg-transparent pe-6 font-medium outline-none" {...props}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <Icon name="chevron" className="pointer-events-none absolute end-4 size-4 text-ink-soft" />
    </label>
  );
}
