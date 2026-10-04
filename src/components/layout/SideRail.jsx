import Icon from '../ui/Icon';
import logo from '../../assets/logo-mark-rose.svg';
import { cn } from '../../lib/cn';

 export default function SideRail({ items, active }) {
  return (
    <aside className="fixed inset-x-3 bottom-3 z-30 flex justify-around rounded-3xl bg-surface p-2 shadow-raised lg:sticky lg:inset-auto lg:top-5 lg:w-[85px] lg:shrink-0 lg:flex-col lg:items-center lg:justify-start lg:gap-6 lg:rounded-[36px] lg:py-6">
      <img src={logo} alt="" className="hidden size-11 lg:block" />
      <nav className="contents">
        {items.map((item) => {
          const on = item.label === active;
          return (
            <a key={item.label} href={item.href} aria-current={on ? 'page' : undefined}
              className={cn('flex flex-col items-center gap-1.5 text-xs font-medium text-ink-soft hover:text-ink', on && 'font-bold text-brand-500')}>
              <span className="relative">
                <span className={cn('grid size-10 place-items-center', on && 'size-12 rounded-blob shadow-raised-sm')}>
                  <Icon name={item.icon} solid={on} className="size-5" />
                </span>
                {item.badge && (
                  <span className="absolute -end-2 -top-1 grid size-5 place-items-center rounded-full bg-brand-600 text-[11px] font-bold text-white">{item.badge}</span>
                )}
              </span>
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
