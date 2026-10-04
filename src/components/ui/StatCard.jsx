import { Card } from './Card';
import IconBlob from './IconBlob';
import { cn } from '../../lib/cn';

 export default function StatCard({ icon, tone = 'danger', solid, filled, value, title, note }) {
  const color = tone === 'brand' ? 'text-brand-500' : 'text-danger';
  return (
    <Card className="mt-6 flex flex-col items-center text-center lg:mt-0">
      <IconBlob name={icon} tone={tone} solid={solid} filled={filled} size="lg" className="-mt-11 mb-1" />
      <p className={cn('text-4xl font-extrabold', color)}>{value}</p>
      <p className="mt-2 text-sm font-medium">{title}</p>
      <p className="text-[11px] text-ink-mute">{note}</p>
    </Card>
  );
}
