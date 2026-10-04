import Icon from './Icon';
import { cn } from '../../lib/cn';

 const variants = {
  primary: 'bg-btn-gradient text-white shadow-btn-primary hover:shadow-btn-primary-hover active:shadow-btn-primary-pressed',
  soft: 'bg-surface text-brand-600 shadow-raised-sm hover:shadow-raised-md active:shadow-inset',
  danger: 'bg-surface text-danger shadow-raised-sm hover:shadow-raised-md active:shadow-inset',
  ghost: 'bg-transparent text-ink-soft hover:text-brand-600 hover:shadow-raised-sm',
  link: 'text-brand-500 hover:text-brand-700 !h-auto !px-0 !text-xs',
};
const sizes = { lg: 'h-[54px] px-7 text-base', md: 'h-[46px] px-[22px] text-[15px]', sm: 'h-9 px-3.5 text-[13px]' };

 export function Button({ variant = 'primary', size = 'md', icon, loading, block, disabled, className, children, ...props }) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-petal font-bold transition-[box-shadow,color,transform] duration-200 active:scale-[.99]',
        'focus-visible:!shadow-[theme(boxShadow.raised-sm),theme(boxShadow.focus)] focus-visible:!ring-0',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:!shadow-none disabled:!transform-none',
        loading && 'disabled:cursor-progress disabled:opacity-60',
        block && 'w-full',
        sizes[size], variants[variant], className,
      )}
      {...props}
    >
      {loading && <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
      {icon && !loading && <Icon name={icon} className="size-[18px]" />}
      {children}
    </button>
  );
}

 export function IconButton({ icon, label, count, className, ...props }) {
  return (
    <button aria-label={label} className={cn('relative grid size-11 shrink-0 place-items-center rounded-full bg-surface text-ink-soft shadow-raised-sm transition-[box-shadow,color] hover:text-brand-600 active:text-brand-600 active:shadow-inset', className)} {...props}>
      <Icon name={icon} className="size-5" />
      {count > 0 && (
        <span className="absolute -top-1 -end-1 grid size-5 place-items-center rounded-full bg-brand-600 text-[10px] font-bold text-white">{count}</span>
      )}
    </button>
  );
}
