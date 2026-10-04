import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';

 const tones = { brand: 'bg-brand-50 text-brand-700', gold: 'bg-gold-soft text-gold' };

export default function Tag({ tone = 'brand', icon, children }) {
  return <span className={cn('inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs font-bold', tones[tone])}>{icon && <Icon name={icon} className="size-3.5" />}{children}</span>;
}
