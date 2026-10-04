import { useState } from 'react';
import { Button } from '../ui/Button';
import { money } from '../../lib/format';

 export function RefCode({ code = 'AA-7K3Q-9XMD' }) {
  const [done, setDone] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  };
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl bg-surface py-1 ps-4 pe-1 font-mono text-sm font-bold shadow-inset">
      <bdi dir="ltr">{code}</bdi>
      <Button variant="ghost" size="sm" icon={done ? 'check' : undefined} onClick={copy} aria-live="polite">{done ? 'نُسخ' : 'نسخ'}</Button>
    </span>
  );
}

 export function Money({ value, credit }) {
  return <span>{credit && 'دائن '}<bdi dir="ltr">{money(value)}</bdi></span>;
}
