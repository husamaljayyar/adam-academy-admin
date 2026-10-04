import { cn } from '../../lib/cn';
import Icon from '../ui/Icon';

 export default function Stepper({ steps, current }) {
  return (
    <ol className="flex justify-between">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-1 flex-col items-center gap-1.5 text-[11px]">
          <span className={cn('grid size-7 place-items-center rounded-full bg-surface text-xs font-bold', i < current && 'text-brand-500 shadow-raised-sm', i === current && 'bg-brand-gradient text-white shadow-brand', i > current && 'text-ink-mute shadow-inset')}>
            {i < current ? <Icon name="check" className="size-3.5" /> : i + 1}
          </span>
          <span className={cn(i === current ? 'font-bold' : 'text-ink-soft')}>{s}</span>
        </li>
      ))}
    </ol>
  );
}
