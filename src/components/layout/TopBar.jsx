import Segmented from '../ui/Segmented';
import { SelectField } from '../ui/Field';

const defaultSims = ['المحاكاة: عادي', 'المحاكاة: بطيء', 'المحاكاة: بلا اتصال'];

 export default function TopBar({ steps, resetLabel = 'أعد البيانات', sims = defaultSims, onSim, onReset }) {
  return (
    <header className="flex flex-wrap items-center gap-x-4 gap-y-3 bg-surface px-4 py-3 text-xs shadow-raised-sm sm:px-6">
      <p className="text-ink-soft">
        <span className="font-medium text-ink">نموذج تفاعلي:</span> {steps.join(' ← ')}
      </p>
      <div className="ms-auto flex flex-wrap items-center gap-3">
        <Segmented options={['سطح المكتب', 'الجوّال']} />
        <SelectField icon={null} aria-label="المحاكاة" options={sims} onChange={(e) => onSim?.(e.target.selectedIndex)} className="!py-2 text-xs" />
        <button type="button" onClick={onReset} className="font-bold text-ink hover:text-brand-500">{resetLabel}</button>
      </div>
    </header>
  );
}
