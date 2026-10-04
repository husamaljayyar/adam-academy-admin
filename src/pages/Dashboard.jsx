import DashboardHeader from '../components/dashboard/DashboardHeader';
import TodayActivity from '../components/dashboard/TodayActivity';
import NearestDeadline from '../components/dashboard/NearestDeadline';
import ReviewQueue from '../components/dashboard/ReviewQueue';
import WeeklyDues from '../components/dashboard/WeeklyDues';
import UpcomingGroups from '../components/dashboard/UpcomingGroups';
import StatCard from '../components/ui/StatCard';
import { activity, weekDues, groups } from '../data/mock';

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <DashboardHeader
        greeting="الإثنين 28 سبتمبر · صباح الخير نور"
        title="الرئيسيّة"
        branches={['كلّ فروعي (3)']}
        notifications={3}
        initials="نس"
      />

      {/* شبكة 4 أعمدة على الشاشات الكبيرة، عمودان على الجهاز اللوحي، عمود واحد على الجوال */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <TodayActivity items={activity} className="lg:row-span-2" />
        <NearestDeadline name="سارة أحمد" place="غزّة للسيدات · اليوم 2:50 م" minutes={45} windowMinutes={120} late={1} />
        <ReviewQueue
          className="sm:col-span-2"
          waiting={5}
          queueMax={8}
          reviewed={8}
          total={13}
          counts={[{ tone: 'brand', value: 3 }, { tone: 'gold', value: 1 }, { tone: 'danger', value: 1 }]}
          next={{ since: 'منذ 5 ساعات', name: 'محمّد يوسف', place: 'غزّة للرجال', amount: 400 }}
        />

        <div className="grid gap-5 sm:col-span-2 sm:grid-cols-3 lg:col-span-3">
          <StatCard icon="alert" filled value="3" title="تحتاج معالجة" note="منها عكس دفعة واحد" />
          <StatCard icon="wallet" filled value="12" title="متأخّرات" note="بقيمة 5,400 ₪" />
          <StatCard icon="calendar" tone="brand" solid value="7" title="أقساطٌ مستحقّة اليوم" note="بقيمة 3,200 ₪" />
        </div>

        <WeeklyDues days={weekDues} className="sm:col-span-2" />
        <UpcomingGroups groups={groups} pendingCount={9} className="sm:col-span-2" />
      </div>
    </div>
  );
}
