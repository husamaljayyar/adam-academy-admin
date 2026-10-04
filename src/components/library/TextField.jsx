import { cn } from '../../lib/cn';
import Icon from '../ui/Icon';

 export default function TextField({ label, required, hint, error, prefix, suffix, icon, multiline, disabled, className, ...props }) {
  const Input = multiline ? 'textarea' : 'input';
  return (
    <label className={cn('flex flex-col gap-1.5', className)}>
      {label && <span className="text-xs font-bold">{label}{required && <span className="text-danger"> *</span>}</span>}
      <span className={cn('flex gap-2 rounded-2xl bg-surface px-4 text-sm shadow-inset focus-within:ring-2 focus-within:ring-brand-200', multiline ? 'items-start py-3' : 'items-center py-3', error && 'ring-2 ring-danger/50', disabled && 'text-ink-mute')}>
        {icon && <Icon name={icon} className="size-4 shrink-0 text-ink-soft" />}
        {prefix && <span className="text-ink-mute" dir="ltr">{prefix}</span>}
        <Input disabled={disabled} rows={multiline ? 3 : undefined} className="w-full min-w-0 resize-none bg-transparent outline-none placeholder:text-ink-mute" {...props} />
        {suffix && <span className="text-ink-mute">{suffix}</span>}
      </span>
      {error ? (
        <span className="flex items-center gap-1 text-[11px] text-danger"><Icon name="alert" className="size-3.5" />{error}</span>
      ) : hint && <span className="text-[11px] text-ink-mute">{hint}</span>}
    </label>
  );
}
