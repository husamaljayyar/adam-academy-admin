import Icon from '../ui/Icon';
import logo from '../../assets/logo-mark-rose.svg';
import { adminNav, settingsNav, mobileNav } from '../../data/adminNav';
import { cn } from '../../lib/cn';

 const Count = ({ children }) => (
  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1.5 text-xs font-bold text-white">{children}</span>
);

 function SideItem({ item, active, count }) {
  const Tag = item.href ? 'a' : 'button';
  return (
    <Tag
      href={item.href}
      type={item.href ? undefined : 'button'}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex min-h-11 w-full items-center gap-3 rounded-petal px-3 text-start text-sm font-medium text-ink-soft transition-[box-shadow,color] duration-200 hover:text-ink hover:shadow-raised-sm',
        'focus-visible:!shadow-[theme(boxShadow.raised-sm),theme(boxShadow.focus)] focus-visible:!ring-0',
        active && 'font-bold text-brand-500 shadow-raised-sm hover:text-brand-500',
      )}
    >
      <Icon name={item.icon} className="size-5 shrink-0" />
      <span className="flex-1">{item.label}</span>
      {count > 0 && <Count>{count}</Count>}
    </Tag>
  );
}

 export default function AdminSidebar({ active, counts = {} }) {
  return (
    <aside aria-label="القائمة الرئيسيّة" className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col gap-1 overflow-y-auto bg-surface px-3 py-5 shadow-raised-sm lg:flex">
      <div className="flex items-center gap-2 px-2 pb-5 text-base font-medium">
        <img src={logo} alt="" className="h-[34px]" />
        لوحة الإدارة
      </div>
      {adminNav.map((item) => <SideItem key={item.id} item={item} active={item.id === active} count={counts[item.id]} />)}
      <div className="mx-2 my-3 h-px bg-ink-mute/20" />
      <SideItem item={settingsNav} active={active === settingsNav.id} />
    </aside>
  );
}

 export function BottomNav({ active, counts = {} }) {
  return (
    <nav aria-label="التنقّل" className="fixed inset-x-3 bottom-3 z-30 flex justify-around rounded-3xl bg-surface p-1.5 shadow-raised lg:hidden">
      {mobileNav.map((item) => {
        const on = item.id === active;
        const Tag = item.href ? 'a' : 'button';
        return (
          <Tag key={item.id} href={item.href} type={item.href ? undefined : 'button'} aria-current={on ? 'page' : undefined}
            className={cn('relative flex min-h-12 min-w-14 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-medium text-ink-soft', on && 'font-bold text-brand-500 shadow-inset')}>
            <span className="relative">
              <Icon name={item.icon} className="size-[22px]" />
              {counts[item.id] > 0 && <span className="absolute -top-2 -end-3.5"><Count>{counts[item.id]}</Count></span>}
            </span>
            {item.label}
          </Tag>
        );
      })}
    </nav>
  );
}
