import Icon from '../ui/Icon';
import { branchKinds } from '../../data/queue';
import { toneText } from '../../lib/tones';
import { cn } from '../../lib/cn';

 export default function BranchLine({ name, kind, extra }) {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <span className={cn('grid size-7 shrink-0 place-items-center rounded-blob shadow-inset', toneText[branchKinds[kind]])}>
        <Icon name="pin" className="size-4" />
      </span>
      <span className="min-w-0 truncate text-sm">
        <b>{name}</b>
        {extra && <span className="text-ink-soft"> · {extra}</span>}
      </span>
    </span>
  );
}
