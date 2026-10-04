import { useState } from 'react';
import TopBar from '../components/layout/TopBar';
import SideRail from '../components/layout/SideRail';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import OldestInQueue from '../components/dashboard/OldestInQueue';
import QueueAlert from '../components/dashboard/QueueAlert';
import SeatGroupCard from '../components/dashboard/SeatGroupCard';
import ActivityItem from '../components/ui/ActivityItem';
import IconBlob from '../components/ui/IconBlob';
import Pill from '../components/ui/Pill';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { toneText } from '../lib/tones';
import { navItems, flow } from '../data/mock';
import { stats, oldest, alerts, seatGroups, feed, pendingBookings } from '../data/admin';

// بطاقة رقم صغيرة: أيقونة فوق الرقم ثم العنوان
const Stat = ({ icon, tone, value, label }) => (
  <Card className="mt-5 flex flex-col items-center px-2 text-center">
    <IconBlob name={icon} tone={tone} size="sm" className="-mt-9 mb-1" />
    <p className={`text-3xl font-extrabold ${toneText[tone]}`}>{value}</p>
    <p className="mt-1 text-[11px] text-ink-soft">{label}</p>
  </Card>
);

// لوحة الإدارة — الرئيسيّة (صفحة بإطارها الخاص: bare في routes.js)
export default function AdminHome() {
  const [started, setStarted] = useState(false); // مؤقّت حتى تُبنى صفحة المراجعة

  return (
    <>
      <TopBar steps={flow} />
      <div className="flex items-start gap-4 p-3 pb-28 lg:gap-5 lg:p-5">
        <SideRail items={navItems} active="الرئيسيّة" />

        <main className="grid min-w-0 flex-1 gap-5 xl:grid-cols-[1fr_18rem]">
          <div className="min-w-0 space-y-6">
            <DashboardHeader greeting="الإثنين 28 سبتمبر · مديرة الفرع" title="صباح الخير، نور" branches={['كلّ فروعي (3)']} notifications={3} initials="نس" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
              {stats.map((s) => <Stat key={s.label} {...s} />)}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
              <OldestInQueue item={oldest} onStart={() => setStarted(true)} />
              <div className="space-y-5">{alerts.map((a) => <QueueAlert key={a.title} {...a} />)}</div>
            </div>
            {started && <p role="status" className="text-xs text-ink-soft">ستُفتح مراجعة {oldest.name} هنا — صفحة المراجعة هي الخطوة التالية.</p>}

            <section>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="text-xl font-extrabold">مقاعد المجموعات القادمة</h2>
                <p className="text-[11px] text-ink-soft">المؤكَّد والمحجوز وقيد المراجعة من السعة</p>
                <Button variant="link" className="ms-auto">كلّ المجموعات</Button>
              </div>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {seatGroups.map((g) => <SeatGroupCard key={g.title} g={g} />)}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <Card>
              <ul>{feed.map((f) => <ActivityItem key={f.title} {...f} />)}</ul>
            </Card>
            <Card>
              <p className="text-[11px] text-ink-soft">حجوزاتٌ سارية بلا إشعار</p>
              <div className="mt-2 flex items-center justify-between">
                <Pill tone="gold" dot>أعلى من المعتاد</Pill>
                <b className="text-4xl text-gold">{pendingBookings.count}</b>
              </div>
              <p className="mt-3 text-[11px] text-ink-soft">متوسّط الأسبوع {pendingBookings.average}. قد تكون حجوزاتٍ وهميّة تشغل مقاعد.</p>
              <Button variant="soft" block className="mt-4">اعرضها</Button>
            </Card>
          </aside>
        </main>
      </div>
    </>
  );
}
