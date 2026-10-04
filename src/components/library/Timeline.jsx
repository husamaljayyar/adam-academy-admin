import IconBlob from '../ui/IconBlob';

 export default function Timeline({ events }) {
  return (
    <ol>
      {events.map((e) => (
        <li key={e.what} className="relative flex gap-3 pb-5 last:pb-0 after:absolute after:start-[17px] after:top-10 after:bottom-1 after:w-0.5 after:rounded after:bg-ink-mute/20 last:after:hidden">
          <IconBlob name={e.icon} tone={e.tone} size="sm" />
          <div className="min-w-0 space-y-1">
            <p className="text-[13px] font-bold">{e.what}</p>
            <p className="text-xs text-ink-soft">{e.meta}</p>
            {e.why && <p className="rounded-xl px-3 py-2 text-xs shadow-inset">{e.why}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
