import Sidebar from './Sidebar';
import { navItems } from '../../data/mock';

 export default function AppShell({ current, children }) {
  return (
    <div className="flex items-start gap-4 p-3 lg:gap-5 lg:p-5">
      <Sidebar items={navItems} current={current} />
      <main className="min-w-0 flex-1 rounded-shell bg-surface p-3 shadow-raised sm:p-5">{children}</main>
    </div>
  );
}
