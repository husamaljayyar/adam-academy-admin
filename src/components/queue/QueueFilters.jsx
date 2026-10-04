import Chip from '../library/Chip';
import { SelectField } from '../ui/Field';

 export default function QueueFilters({ filters, selected, onToggle, methods, method, onMethod }) {
  return (
    <div role="group" aria-label="المرشّحات" className="flex flex-wrap items-center gap-2">
      {filters.map((f) => (
        <Chip key={f.id} selected={f.id === 'all' ? selected.length === 0 : selected.includes(f.id)} count={f.count} onClick={() => onToggle(f.id)}>
          {f.label}
        </Chip>
      ))}
      <SelectField
        icon={null}
        aria-label="طريقة الدفع"
        options={['كلّ الطرق', ...methods]}
        value={method || 'كلّ الطرق'}
        onChange={(e) => onMethod(e.target.value === 'كلّ الطرق' ? '' : e.target.value)}
        className="w-full !rounded-petal-sm !py-2 text-xs sm:w-[200px]"
      />
    </div>
  );
}
