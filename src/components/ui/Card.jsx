import IconBlob from './IconBlob';
import { cn } from '../../lib/cn';

export function Card({ as: Tag = 'section', className, children }) {
  return <Tag className={cn('rounded-card bg-surface p-5 shadow-raised', className)}>{children}</Tag>;
}

 export function CardHeader({ icon, iconTone, solid, title, action }) {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {icon && <IconBlob name={icon} tone={iconTone} solid={solid} size="sm" />}
        <h3 className="text-[15px] font-bold">{title}</h3>
      </div>
      {action}
    </header>
  );
}
