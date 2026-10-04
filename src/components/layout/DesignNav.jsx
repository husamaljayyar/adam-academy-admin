import { cn } from '../../lib/cn';

 export default function DesignNav({ routes, current }) {
  return (
    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-4 pb-28 pt-2 text-xs text-ink-soft lg:pb-8" aria-label="الواجهات المنفذة">
      <span className="font-bold text-ink">الواجهات:</span>
      {routes.map((route) => (
        <a key={route.path} href={`#${route.path}`} className={cn('hover:text-brand-500', current === route.path && 'font-bold text-brand-500')}>
          {route.label}
        </a>
      ))}
    </nav>
  );
}
