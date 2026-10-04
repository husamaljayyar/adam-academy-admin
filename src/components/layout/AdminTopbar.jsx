import { SearchField, SelectField } from '../ui/Field';
import { IconButton } from '../ui/Button';
import Avatar from '../ui/Avatar';

 export default function AdminTopbar({ branches, notifications, initials }) {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-3 bg-surface px-4 py-3 shadow-[inset_0_-1px_0_rgba(128,120,124,.2)] lg:gap-4 lg:px-6">
      <SelectField options={branches} aria-label="الفرع" className="min-w-0 flex-1 !rounded-petal-sm md:w-[220px] md:flex-none" />
      <SearchField placeholder="اسم، هاتف، أو رقم طلب" aria-label="بحث شامل" className="hidden max-w-[460px] flex-1 !rounded-petal-sm md:flex" />
      <div className="ms-auto flex items-center gap-3">
        <IconButton icon="search" label="بحث" className="md:hidden" />
        <IconButton icon="bell" label="التنبيهات" count={notifications} />
        <Avatar initials={initials} />
      </div>
    </header>
  );
}
