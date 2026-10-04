import { useEffect, useState } from 'react';
import Logo from '../ui/Logo';
import { cn } from '../../lib/cn';

 export default function LibraryNav({ items }) {
  const [on, setOn] = useState(items[0][0]);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)), { rootMargin: '-30% 0px -60% 0px' });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [items]);

   const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="sticky top-0 z-20 bg-surface shadow-raised-sm">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-4 py-3 sm:px-6">
        <a href="#/" className="flex items-center gap-2 whitespace-nowrap font-bold text-brand-500"><Logo className="size-8" />مكتبة المكوّنات</a>
        <nav aria-label="الأقسام" className="flex gap-1 overflow-x-auto p-1 [scrollbar-width:none]">
          {items.map(([id, title]) => (
            <a key={id} href={`#${id}`} onClick={(e) => go(e, id)} className={cn('shrink-0 rounded-full px-4 py-2 text-xs font-medium text-ink-soft hover:text-brand-500', on === id && 'font-bold text-brand-500 shadow-raised-sm')}>{title}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}
