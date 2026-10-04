import IconBlob from '../ui/IconBlob';

const icons = { error: ['alert', 'danger'], warning: ['alert', 'gold'], info: ['info', 'info'], success: ['checkcircle', 'success'] };

 export default function Alert({ tone = 'info', title, action, children }) {
  const [icon, color] = icons[tone];
  return (
    <div role="alert" className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-raised-sm">
      <IconBlob name={icon} tone={color} size="sm" />
      <div className="min-w-0 flex-1 space-y-1">
        <p className="text-[13px] font-bold">{title}</p>
        {children && <p className="text-xs text-ink-soft">{children}</p>}
        {action && <div className="pt-2">{action}</div>}
      </div>
    </div>
  );
}
