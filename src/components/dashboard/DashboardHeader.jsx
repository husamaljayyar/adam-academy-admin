import { SearchField, SelectField } from '../ui/Field';
import { IconButton } from '../ui/Button';
import Avatar from '../ui/Avatar';

export default function DashboardHeader({ greeting, title, branches, notifications, initials }) {
  return (
    <header className="flex flex-wrap items-center gap-3 rounded-card bg-surface p-4 shadow-raised">
      <div className="w-full lg:w-auto">
        <p className="text-xs text-brand-500">{greeting}</p>
        <h1 className="text-2xl font-extrabold">{title}</h1>
      </div>
      <SearchField placeholder="اسم، هاتف، أو رقم طلب" className="min-w-0 flex-1 basis-full sm:basis-48 lg:mx-4" />
      <SelectField options={branches} className="flex-1 sm:flex-none" />
      <span className="hidden h-8 w-px bg-ink-mute/30 sm:block" />
      <IconButton icon="bell" label="الإشعارات" count={notifications} />
      <Avatar initials={initials} />
    </header>
  );
}
