import { useState } from 'react';
import AdminShell from '../components/layout/AdminShell';
import TopBar from '../components/layout/TopBar';
import QueueFilters from '../components/queue/QueueFilters';
import NotificationCard, { NotificationCardSkeleton } from '../components/queue/NotificationCard';
import Alert from '../components/library/Alert';
import { EmptyState } from '../components/library/Skeleton';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { queueItems, queueFilters, methods, queueFlow, queueSims } from '../data/queue';

// سلّم المهلة: «قاربت» و«متأخّرة» لا يجتمعان، فاختيار أحدهما يلغي الآخر
const exclusive = ['soon', 'late'];
const user = { branches: ['كلّ فروعي (3)'], notifications: 3, initials: 'نس' };

// A03 — طابور إشعارات الدفع. بطاقات لا جدول: كلّ عنصر قرار. الأقدم أوّلاً.
export default function PaymentQueue() {
  const [view, setView] = useState('ready'); // ready | empty | loading (من شريط المحاكاة)
  const [selected, setSelected] = useState([]);
  const [method, setMethod] = useState('');
  const [opened, setOpened] = useState(null); // مؤقّت حتى تُبنى صفحة المراجعة A04

  const all = view === 'empty' ? [] : queueItems;
  const activeFilters = selected.map((id) => queueFilters.find((filter) => filter.id === id)).filter(Boolean);
  const shown = [...all]
    .sort((a, b) => b.minutes - a.minutes)
    .filter((item) => activeFilters.every(({ test }) => test(item)) && (!method || item.method === method));
  const filtered = selected.length > 0 || method !== '';

  const toggle = (id) => setSelected((s) => {
    if (id === 'all') return [];
    if (s.includes(id)) return s.filter((x) => x !== id);
    return [...s.filter((x) => !(exclusive.includes(id) && exclusive.includes(x))), id];
  });
  const clear = () => { setSelected([]); setMethod(''); };
  const reset = () => { clear(); setView('ready'); setOpened(null); };
  const filters = queueFilters.map((f) => ({ ...f, count: all.filter(f.test).length }));

  const demo = (
    <TopBar steps={queueFlow} resetLabel="أعد الطابور" sims={queueSims.map(([label]) => label)} onSim={(i) => { setView(queueSims[i][1]); clear(); }} onReset={reset} />
  );

  return (
    <AdminShell active="queue" counts={{ queue: all.length }} demo={demo} user={user}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h1 className="text-2xl font-bold">إشعارات الدفع</h1>
          <p className="text-xs text-ink-soft">بانتظار المراجعة <bdi dir="ltr" className="md:hidden">{all.length} </bdi>· الأقدم أوّلاً</p>
        </div>

        {view !== 'loading' && all.length > 0 && (
          <QueueFilters filters={filters} selected={selected} onToggle={toggle} methods={methods} method={method} onMethod={setMethod} />
        )}

        {opened && (
          <Alert tone="info" title={`ستُفتح مراجعة إشعار ${opened.name} هنا`} action={<Button size="sm" variant="soft" onClick={() => setOpened(null)}>حسناً</Button>}>
            صفحة المراجعة (A04) هي الخطوة التالية في المشروع.
          </Alert>
        )}

        {view === 'loading' ? (
          <div aria-busy="true" aria-label="جارٍ التحميل" className="grid grid-cols-[repeat(auto-fill,minmax(min(330px,100%),1fr))] gap-5">
            {[0, 1, 2, 3].map((i) => <NotificationCardSkeleton key={i} />)}
          </div>
        ) : all.length === 0 ? (
          <Card><EmptyState icon="inbox" title="لا إشعارات بانتظار المراجعة" text="ستظهر هنا حين يرفع متقدّمٌ صورة إشعار." /></Card>
        ) : shown.length === 0 ? (
          <Card><EmptyState icon="filter" title="لا إشعارات تطابق المرشّحات" action={<Button size="sm" onClick={clear}>امسح المرشّحات</Button>} /></Card>
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(330px,100%),1fr))] gap-5">
            {shown.map((item) => <li key={item.id}><NotificationCard item={item} onOpen={setOpened} /></li>)}
          </ul>
        )}

        {filtered && shown.length > 0 && <div><Button size="sm" variant="ghost" onClick={clear}>امسح المرشّحات</Button></div>}
      </div>
    </AdminShell>
  );
}
