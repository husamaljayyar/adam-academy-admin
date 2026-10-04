import Icon from './Icon';
import { cn } from '../../lib/cn';

 const solidTones = {
  brand: 'bg-brand-gradient text-white shadow-brand',
  gold: 'bg-gold text-white shadow-raised-sm',
};
const softTones = {
  brand: 'text-brand-500',
  gold: 'text-gold',
  info: 'text-info',
  success: 'text-success',
  danger: 'text-danger',
  plum: 'text-plum',
  slate: 'text-slate',
};
const sizes = { sm: 'size-9', md: 'size-11', lg: 'size-14' };
const iconSizes = { sm: 'size-4', md: 'size-5', lg: 'size-6' };

export default function IconBlob({ name, tone = 'brand', solid = false, filled = false, size = 'md', className }) {
  const look = solid ? solidTones[tone] : `bg-surface shadow-raised-sm ${softTones[tone]}`;
  return (
    <span className={cn('grid shrink-0 place-items-center rounded-blob', sizes[size], look, className)}>
      <Icon name={name} solid={filled || (solid && name === 'clock')} className={iconSizes[size]} />
    </span>
  );
}
