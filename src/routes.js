import Dashboard from './pages/Dashboard';
import PaymentQueue from './pages/PaymentQueue';
import AdminHome from './pages/AdminHome';
import Library from './pages/Library';

 export const routes = [
  { path: '/', label: 'لوحة الإدارة V3', page: Dashboard },
  { path: '/queue', label: 'لوحة الإدارة V2', page: PaymentQueue, bare: true },
  { path: '/admin', label: 'لوحة الإدارة', page: AdminHome, bare: true },
  { path: '/library', label: 'مكتبة المكونات V2', page: Library, bare: true },
];
