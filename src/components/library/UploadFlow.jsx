import { useState } from 'react';
import { Button, IconButton } from '../ui/Button';
import Icon from '../ui/Icon';
import StatusBadge from './StatusBadge';
import Alert from './Alert';
import { cn } from '../../lib/cn';

 export function FileRow({ name = 'IMG_2041.jpg', children }) {
  return (
    <div className="flex items-center gap-3 rounded-card bg-surface p-3 shadow-raised-sm">
      <span className="grid h-[72px] w-14 shrink-0 place-items-center rounded-xl text-ink-soft shadow-inset"><Icon name="image" className="size-5" /></span>
      <div className="min-w-0 flex-1 space-y-2"><p className="truncate text-[13px] font-bold" dir="ltr">{name}</p>{children}</div>
    </div>
  );
}

const Step = ({ n, title, children }) => (
  <div className="space-y-3">
    <span className="flex items-center gap-2 text-xs font-bold"><b className="grid size-6 place-items-center rounded-full text-brand-500 shadow-raised-sm">{n}</b>{title}</span>
    {children}
  </div>
);

 export function UploadFlow() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 [&>*]:min-w-0">
      <Step n="1" title="اختيار">
        <div className="space-y-3 rounded-card p-4 text-center shadow-inset">
          <div className="flex justify-center gap-2">{[['camera', 'الكاميرا'], ['image', 'المعرض'], ['paperclip', 'ملفّات']].map(([i, l]) => <IconButton key={i} icon={i} label={l} />)}</div>
          <p className="text-xs text-ink-soft">JPG · PNG · PDF حتى 5 ميغابايت</p>
        </div>
      </Step>
      <Step n="2" title="رفع">
        <FileRow>
          <div className="space-y-1"><span className="text-[11px] text-ink-soft" dir="ltr">64%</span><div className="h-2 rounded-full shadow-inset"><span className="block h-full w-[64%] rounded-full bg-brand-500" /></div></div>
        </FileRow>
      </Step>
      <Step n="3" title="بانتظار المراجعة"><FileRow><StatusBadge status="receipt_pending" size="sm" label="لم يُؤكَّد الدفع بعد" /></FileRow></Step>
      <Step n="!" title="رفضٌ فوريّ"><Alert tone="error" title="الملفّ أكبر من 5 ميغابايت" action={<Button size="sm" variant="soft">اختر صورة أخرى</Button>} /></Step>
    </div>
  );
}

 export function DocViewer() {
  const [rot, setRot] = useState(0);
  const [zoom, setZoom] = useState(1);
  return (
    <div className="space-y-4">
      <div className="grid h-64 place-items-center overflow-hidden rounded-card">
        <div style={{ transform: `rotate(${rot}deg) scale(${zoom})` }} className={cn('flex h-52 w-36 flex-col gap-2.5 rounded-xl bg-surface p-4 shadow-raised transition-transform')}>
          {['60%', '100%', '80%', '40%'].map((w) => <i key={w} style={{ width: w }} className="block h-2 rounded shadow-inset" />)}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="soft" size="sm" icon="plus" onClick={() => setZoom((z) => Math.min(z + 0.25, 2))}>تكبير</Button>
        <Button variant="soft" size="sm" onClick={() => { setZoom(1); setRot(0); }}>الأصل</Button>
        <Button variant="soft" size="sm" onClick={() => setRot((r) => r - 90)}>تدوير</Button>
        <Button variant="soft" size="sm" icon="eye">ملء الشاشة</Button>
      </div>
    </div>
  );
}
