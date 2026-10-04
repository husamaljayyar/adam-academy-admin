import { useState } from 'react';
import { Checkbox } from './Choice';
import StatusBadge from './StatusBadge';
import { Money } from './RefCode';
import { Button, IconButton } from '../ui/Button';
import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';

const Person = ({ r }) => (
  <div><p className="text-[13px] font-bold">{r.name}</p><bdi dir="ltr" className="font-mono text-[11px] text-ink-mute">{r.ref}</bdi></div>
);

 export function DataTable({ rows, total }) {
  const [sel, setSel] = useState([0]);
  const all = sel.length === rows.length;
  const toggle = (i) => setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-card shadow-inset">
        <table className="w-full min-w-[560px] text-start text-sm">
          <thead>
            <tr className="bg-ink-mute/10 text-xs font-bold">
              <th className="w-10 p-3"><Checkbox aria-label="تحديد الكلّ" checked={all} onChange={() => setSel(all ? [] : rows.map((_, i) => i))} /></th>
              <th className="p-3 text-start">الاسم</th><th className="p-3 text-start">البرنامج</th>
              <th className="p-3 text-end"><span className="inline-flex items-center gap-1 text-brand-500">المبلغ<Icon name="chevron" className="size-3.5" /></span></th>
              <th className="p-3 text-start">الحالة</th><th className="w-10" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.ref} className={cn('border-t border-ink-mute/10 hover:bg-ink-mute/5', sel.includes(i) && '!bg-brand-100')}>
                <td className="p-3"><Checkbox aria-label={`تحديد ${r.name}`} checked={sel.includes(i)} onChange={() => toggle(i)} /></td>
                <td className="p-3"><Person r={r} /></td>
                <td className="p-3">{r.program}</td>
                <td className="p-3 text-end font-bold"><Money value={r.amount} /></td>
                <td className="p-3"><StatusBadge status={r.status} size="sm" /></td>
                <td className="p-3"><IconButton icon="more" label="المزيد" className="!size-8 !shadow-none" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-xs text-ink-soft">
        <span><bdi dir="ltr">1–{rows.length}</bdi> من <bdi dir="ltr">{total}</bdi></span>
        <div className="flex gap-2"><Button variant="soft" size="sm">السابق</Button><Button variant="soft" size="sm">التالي</Button></div>
      </div>
    </div>
  );
}

 export function RowCard({ row }) {
  return (
    <div className="space-y-3 rounded-2xl bg-surface p-4 shadow-raised-sm">
      <div className="flex items-start justify-between gap-2"><Person r={row} /><StatusBadge status={row.status} size="sm" /></div>
      <div className="flex justify-between text-xs"><span className="text-ink-soft">{row.program}</span><b><Money value={row.amount} /></b></div>
    </div>
  );
}
