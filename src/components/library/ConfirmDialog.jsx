import { useState } from 'react';
import { Button } from '../ui/Button';
import IconBlob from '../ui/IconBlob';
import Chip from './Chip';
import TextField from './TextField';

 export default function ConfirmDialog({ title, effects, reasons }) {
  const [reason, setReason] = useState(reasons[0]);
  return (
    <div role="dialog" aria-label={title} className="space-y-5 rounded-card bg-surface p-5 shadow-raised">
      <h3 className="text-lg font-extrabold">{title}</h3>
      <div className="overflow-hidden rounded-card shadow-inset">
        <p className="bg-danger-soft px-4 py-3 text-xs font-bold text-danger">ما سيحدث</p>
        {effects.map((e) => (
          <div key={e.title} className="flex items-center gap-3 border-t border-ink-mute/10 px-4 py-3">
            <IconBlob name={e.icon} tone="danger" size="sm" />
            <div><p className="text-[13px] font-bold">{e.title}</p><p className="text-xs text-ink-soft" dir={e.ltr ? 'ltr' : undefined}>{e.note}</p></div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-xs text-ink-soft">السبب</p>
        <div className="flex flex-wrap gap-2">{reasons.map((r) => <Chip key={r} selected={reason === r} onClick={() => setReason(r)}>{r}</Chip>)}</div>
        {reason === 'أخرى' && <TextField label="اكتب السبب" required multiline rows={2} />}
      </div>
      <div className="flex gap-3"><Button variant="soft">تراجع</Button><Button variant="danger">ألغِ التسجيل</Button></div>
    </div>
  );
}
