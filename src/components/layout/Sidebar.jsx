import Icon from '../ui/Icon';
import logoPath from '../../assets/logo-mark-rose.svg';
import { cn } from '../../lib/cn';

 export function NavItem({ label, icon, href = '#', badge, active }) {
  return (
    <a href={href} className="flex flex-col items-center gap-1.5 text-[12px] text-white transition-opacity hover:opacity-90">
      <span className="relative">
        <span
          className={cn(
            'grid place-items-center transition-all duration-200',
            active
              ? 'size-12 rounded-blob bg-surface text-brand-500 shadow-sm lg:size-14'
              : 'size-8 text-white lg:size-10'
          )}
        >
          <Icon name={icon} solid className={active ? 'size-5 lg:size-6' : 'size-5 lg:size-6'} />
        </span>
        {badge && (
          <span className="absolute -end-3 -top-2 grid size-5 place-items-center rounded-full bg-white text-[11px] font-bold text-brand-600 shadow-sm">
            {badge}
          </span>
        )}
      </span>
      <span className={active ? 'font-bold' : 'font-medium text-white/90'}>{label}</span>
    </a>
  );
}

 export default function Sidebar({ items, current }) {

  const activeIdx = Math.max(0, items.findIndex((i) => i.path === current));
  return (
    <aside className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-3xl bg-brand-vertical px-2 py-2 shadow-brand lg:sticky lg:inset-auto lg:top-5 lg:w-[85px] lg:shrink-0 lg:flex-col lg:justify-start lg:gap-6 lg:rounded-[36px] lg:px-0 lg:py-6">
       <img
        src={logoPath}
        alt="Logo"
        className="hidden size-11 object-contain brightness-0 invert lg:mb-2 lg:block"
      />
      <nav className="contents">
        {items.map((item, i) => (
          <NavItem key={item.label} {...item} active={i === activeIdx} />
        ))}
      </nav>
    </aside>
  );
}