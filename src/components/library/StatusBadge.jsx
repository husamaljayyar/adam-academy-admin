import Icon from '../ui/Icon';
import { statuses } from '../../data/library';
import { cn } from '../../lib/cn';
import { toneText } from '../../lib/tones';


 export default function StatusBadge({ status, label, size = 'md' }) {
  const [tone, icon, text] = statuses[status];
  const sm = size === 'sm';
  return (
    <span className={cn('inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-surface font-bold shadow-raised-sm', sm ? 'h-[30px] ps-3 pe-1 text-xs' : 'h-9 ps-4 pe-1 text-[13px]')}>
      {label || text}
      <span className={cn('grid shrink-0 place-items-center rounded-full shadow-inset', toneText[tone], sm ? 'size-[22px]' : 'size-7')}>
        <Icon name={icon} className={sm ? 'size-3' : 'size-3.5'} />
      </span>
    </span>
  );
}
