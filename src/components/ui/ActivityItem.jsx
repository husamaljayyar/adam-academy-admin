import IconBlob from './IconBlob';

 export default function ActivityItem({ icon, tone, title, time }) {
  return (
    <li className="relative flex items-center gap-3 pb-5 last:pb-0 after:absolute after:start-[17px] after:top-10 after:h-3 after:w-px after:bg-ink-mute/30 last:after:hidden">
      <IconBlob name={icon} tone={tone} filled size="sm" />
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium">{title}</p>
        <p className="text-[11px] text-ink-mute">{time}</p>
      </div>
    </li>
  );
}
