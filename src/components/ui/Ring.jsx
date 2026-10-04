import { cn } from '../../lib/cn';

 export default function Ring({ value, max = 100, stroke = 9, color = 'text-brand-500', track = 'text-brand-100', className, children }) {
  const R = 50 - stroke / 2;
  const C = 2 * Math.PI * R;
  const dash = (Math.min(value, max) / max) * C;
  return (
    <div className={cn('relative grid aspect-square place-items-center rounded-full bg-surface p-2 shadow-raised', className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-2 -rotate-90">
        <circle cx="50" cy="50" r={R} fill="none" strokeWidth={stroke} stroke="currentColor" className={track} />
        <circle cx="50" cy="50" r={R} fill="none" strokeWidth={stroke} stroke="currentColor" strokeLinecap="round" strokeDasharray={`${dash} ${C}`} className={color} />
      </svg>
      <div className="relative grid size-[68%] place-items-center rounded-full bg-surface text-center shadow-inset">{children}</div>
    </div>
  );
}
