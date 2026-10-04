import { useState } from 'react';
import { cn } from '../../lib/cn';

 export default function Segmented({ options, defaultValue = options[0], onChange }) {
  const [value, setValue] = useState(defaultValue);
  const pick = (o) => { setValue(o); onChange?.(o); };
  return (
    <div className="flex gap-1 rounded-full bg-surface p-1.5 shadow-raised-sm" role="tablist">
      {options.map((o) => (
        <button
          key={o}
          role="tab"
          aria-selected={value === o}
          onClick={() => pick(o)}
          className={cn('rounded-full px-4 py-2 text-xs transition', value === o ? 'bg-surface font-bold text-brand-500 shadow-raised-sm' : 'text-ink-soft')}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
