import Icon from './Icon';
import { cn } from '../../lib/cn';

const tones = {
  brand: 'text-brand-500',
  gold: 'text-gold',
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  muted: 'text-ink-soft',
};
const dots = { brand: 'bg-brand-500', gold: 'bg-gold', success: 'bg-success', danger: 'bg-danger', info: 'bg-info', muted: 'bg-slate' };

 export default function Pill({ tone = 'muted', icon, dot, children, className }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-surface px-3 py-1.5 text-xs font-bold shadow-raised-sm', tones[tone], className)}>
      {dot && <span className={cn('size-1.5 rounded-full', dots[tone])} />}
      {icon && <Icon name={icon} className="size-3.5" />}
      {children}
    </span>
  );
}
