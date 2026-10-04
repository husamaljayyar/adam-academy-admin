import AdminSidebar, { BottomNav } from './AdminSidebar';
import AdminTopbar from './AdminTopbar';

 export default function AdminShell({ active, counts, demo, user, children }) {
  return (
    <div className="min-h-screen bg-surface">
      {demo}
      <div className="flex items-start">
        <AdminSidebar active={active} counts={counts} />
        <div className="min-w-0 flex-1">
          <AdminTopbar {...user} />
          <main className="p-4 pb-28 lg:p-6">{children}</main>
        </div>
      </div>
      <BottomNav active={active} counts={counts} />
    </div>
  );
}
