import { Chapter, Spec, Stage, Sub, Row, Grid2, Split, Phone } from '../../components/library/Spec';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Countdown from '../../components/library/Countdown';
import SeatMeter from '../../components/library/SeatMeter';
import { RefCode, Money } from '../../components/library/RefCode';
import StatusBadge from '../../components/library/StatusBadge';
import Stepper from '../../components/library/Stepper';
import CourseCard from '../../components/library/CourseCard';
import Tag from '../../components/library/Tag';
import { DataTable, RowCard } from '../../components/library/DataTable';
import { FileRow } from '../../components/library/UploadFlow';
import { requestSteps, tableRows } from '../../data/library';

function RequestSpec() {
  const meta = [['user', 'للسيدات'], ['pin', 'غزّة للسيدات'], ['calendar', 'السبت 18 أكتوبر']];
  return (
    <Spec id="request" title="العدّاد، المقاعد، الرقم المرجعيّ" desc="تظهر معاً في صفحة الطلب.">
      <Split>
        <div className="space-y-5">
          <Stage><Sub>العدّاد التنازليّ</Sub><div className="grid gap-4 md:grid-cols-3"><Countdown /><Countdown state="soon" /><Countdown state="ended" /></div></Stage>
          <Grid2>
            <Stage><Sub>مقياس المقاعد</Sub><SeatMeter confirmed={9} held={3} review={2} capacity={20} /><SeatMeter confirmed={16} held={2} review={1} capacity={20} /></Stage>
            <Stage><Sub>الرقم المرجعيّ والمال</Sub><div><RefCode /></div><Row className="text-lg font-bold"><Money value={1200} /><Money value={412.5} /><Money value={50} credit /></Row></Stage>
          </Grid2>
        </div>
        <Phone>
          <div className="space-y-3 rounded-card bg-brand-100 p-4 shadow-raised-sm">
            <div className="flex items-center justify-between"><span className="text-lg font-extrabold">طلبك</span><StatusBadge status="pending_payment" size="sm" /></div>
            <p className="text-xs">رقم الطلب</p><RefCode />
          </div>
          <Stepper steps={requestSteps} current={1} />
          <div className="flex items-center gap-3 rounded-2xl px-4 py-3 shadow-inset"><Icon name="clock" className="size-[18px] text-brand-500" /><div><p className="text-[13px] font-bold">المقعد محجوز حتى الثلاثاء 2:30 م</p><p className="text-xs">بعد ساعتين و10 دقائق</p></div></div>
          <div className="overflow-hidden rounded-card shadow-raised-sm">
            <p className="px-4 pb-2 pt-4 font-bold">الكوافير الشاملة</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 px-4 pb-4 text-xs text-ink-soft">{meta.map(([i, t]) => <li key={i} className="flex items-center gap-1"><Icon name={i} className="size-3.5" />{t}</li>)}</ul>
            <p className="flex items-center justify-between border-t border-ink-mute/10 px-4 py-3 text-xs text-ink-soft">المطلوب الآن <b className="text-lg text-ink"><Money value={400} /></b></p>
          </div>
          <Button block icon="image">ارفع صورة الإشعار</Button>
        </Phone>
      </Split>
    </Spec>
  );
}

function CardsSpec() {
  return (
    <Spec id="cards" title="البطاقات" desc="دورة · مجموعة · فرع · إشعار · مؤشّر.">
      <div className="grid gap-5 lg:grid-cols-3 [&>*]:min-w-0">
        <CourseCard title="الكوافير الشاملة" category="تصفيف الشعر" duration="شهران ونصف" startDate="السبت 18 أكتوبر" seatsLeft={5} seatsTotal={20} price={1200} />
        <div className="space-y-5">
          <Card className="space-y-3"><h3 className="text-lg font-extrabold">مجموعة أكتوبر · صباحيّة</h3><Row className="gap-2"><Tag icon="scissors">الكوافير الشاملة</Tag><Tag tone="gold" icon="user">للسيدات</Tag></Row><SeatMeter confirmed={15} held={2} review={2} capacity={20} /></Card>
          <Card className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-lg font-extrabold">خانيونس</h3><Tag tone="gold" icon="user">للسيدات</Tag></div><Row className="gap-2"><Button size="sm" icon="phone">اتّصل</Button><Button size="sm" variant="ghost" icon="pin">الموقع</Button></Row></Card>
        </div>
        <div className="space-y-5">
          <Card className="space-y-3">
            <div className="flex items-start justify-between gap-2"><div><h3 className="text-lg font-extrabold">ريم خالد</h3><bdi dir="ltr" className="font-mono text-[11px] text-ink-mute">AA-4M8T-2PLC</bdi></div><StatusBadge status="receipt_pending" size="sm" label="بانتظار المراجعة" /></div>
            <FileRow name="المبلغ المصرَّح"><b className="text-lg"><Money value={400} /></b></FileRow>
            <Button variant="soft" block>راجع الإشعار</Button>
          </Card>
          <Card className="space-y-2"><Sub>بانتظار المراجعة</Sub><div className="flex items-center justify-between"><span className="text-4xl font-extrabold" dir="ltr">12</span><StatusBadge status="review_late" size="sm" label="3 متأخّرة" /></div></Card>
        </div>
      </div>
    </Spec>
  );
}

function TableSpec() {
  return (
    <Spec id="table" title="الجدول" desc="على الجوّال يتحوّل كلّ صفّ إلى بطاقة.">
      <Split>
        <Stage><DataTable rows={tableRows} total={38} /></Stage>
        <Phone>{tableRows.slice(0, 3).map((r) => <RowCard key={r.ref} row={r} />)}</Phone>
      </Split>
    </Spec>
  );
}

export default function Display() {
  return <Chapter n="02" title="العرض" desc="كيف يرى المتقدّم والموظّف البيانات."><RequestSpec /><CardsSpec /><TableSpec /></Chapter>;
}
