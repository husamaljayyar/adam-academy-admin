import { cn } from '../../lib/cn';

 export function Chapter({ n, title, desc, children }) {
  return (
    <section className="space-y-8">
      <header className="flex items-baseline gap-4">
        <span className="text-lg font-bold text-brand-500">{n}</span>
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="text-sm text-ink-soft">{desc}</p>
      </header>
      {children}
    </section>
  );
}

export function Spec({ id, title, desc, children }) {
  return (
    <article id={id} className="scroll-mt-24 space-y-5">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-xl font-extrabold">{title}</h3>
        <p className="text-sm text-ink-soft">{desc}</p>
      </div>
      <div className="space-y-6">{children}</div>
    </article>
  );
}

 export function Stage({ inset, className, children }) {
  return <div className={cn('flex min-w-0 flex-col gap-6 rounded-card bg-surface p-5 sm:p-8', inset ? 'shadow-inset' : 'shadow-raised', className)}>{children}</div>;
}

 export const Sub = ({ children }) => <span className="text-xs font-medium text-ink-soft">{children}</span>;
export const Row = ({ className, children }) => <div className={cn('flex flex-wrap items-center gap-3', className)}>{children}</div>;
export const Grid2 = ({ className, children }) => <div className={cn('grid gap-5 sm:grid-cols-2 [&>*]:min-w-0', className)}>{children}</div>;

 export function Split({ children }) {
  return <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] [&>*]:min-w-0">{children}</div>;
}
export function Phone({ className, children }) {
  return <div className={cn('flex w-full flex-col gap-4 rounded-shell bg-surface p-4 shadow-raised sm:p-5 lg:w-[360px]', className)}>{children}</div>;
}
