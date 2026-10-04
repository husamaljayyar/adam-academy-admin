import { useState } from 'react';
import { Chapter, Spec, Stage, Row, Grid2, Split, Phone } from '../../components/library/Spec';
import { Button, IconButton } from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import Alert from '../../components/library/Alert';
import Chip from '../../components/library/Chip';
import TextField from '../../components/library/TextField';
import { Checkbox } from '../../components/library/Choice';
import { Skeleton, EmptyState } from '../../components/library/Skeleton';
import Timeline from '../../components/library/Timeline';
import ConfirmDialog from '../../components/library/ConfirmDialog';
import { UploadFlow, DocViewer } from '../../components/library/UploadFlow';
import { timelineEvents, cancelEffects, cancelReasons, filterOptions } from '../../data/library';

function TimelineSpec() {
  return (
    <Spec id="timeline" title="الخطّ الزمنيّ ونافذة التأكيد" desc="من · ماذا · متى · لماذا.">
      <Grid2 className="items-start">
        <Stage><Timeline events={timelineEvents} /></Stage>
        <ConfirmDialog title="إلغاء تسجيل سارة أحمد" effects={cancelEffects} reasons={cancelReasons} />
      </Grid2>
    </Spec>
  );
}

function UploadSpec() {
  return (
    <Spec id="upload" title="رفع الإشعار وعارضه" desc="من الاختيار إلى المراجعة.">
      <Stage><UploadFlow /></Stage>
      <Stage inset><DocViewer /></Stage>
    </Spec>
  );
}

function FeedbackSpec() {
  return (
    <Spec id="feedback" title="التنبيهات والانقطاع" desc="كلّ تنبيهٍ يحمل خطوته التالية.">
      <Split>
        <Grid2>
          <Alert tone="error" title="لم يُرسل الطلب" action={<Button size="sm" variant="soft">أعد المحاولة</Button>}>بياناتك محفوظة على هذا الجهاز.</Alert>
          <Alert tone="warning" title="المقعد محجوزٌ لك حتى 2:30 م" action={<Button size="sm" variant="soft">ارفع الإشعار</Button>} />
          <Alert tone="info" title="جارٍ التحقّق من النتيجة">انقطع الاتّصال أثناء الإرسال.</Alert>
          <Alert tone="success" title="أُكِّد مقعدك" action={<Button size="sm" variant="soft">صفحة الطلب</Button>} />
        </Grid2>
        <Phone>
          <p className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[13px] font-bold shadow-inset"><Icon name="globe" className="size-[18px] text-gold" />لا اتّصال — لن يُرسل شيءٌ حتى يعود</p>
          <Button block loading>جارٍ الإرسال</Button>
          <span className="mx-auto mt-2 inline-flex items-center gap-3 rounded-2xl bg-surface px-5 py-3 text-xs font-bold shadow-raised"><Icon name="check" className="size-[18px] text-success" />حُفظت الملاحظة</span>
        </Phone>
      </Split>
    </Spec>
  );
}

function FilterSpec() {
  const [f, setF] = useState('قيد المراجعة');
  const chips = (withCount) => filterOptions.map(([o, n]) => <Chip key={o} count={withCount ? n : undefined} selected={f === o} onClick={() => setF(o)}>{o}</Chip>);
  return (
    <Spec id="filters" title="المرشّحات والحالات الفارغة" desc="صفّ على سطح المكتب، وورقة سفليّة على الجوّال.">
      <Stage>
        <Row className="gap-2"><TextField icon="search" placeholder="اسم، جوّال، أو رقم مرجعيّ" aria-label="بحث" className="min-w-48 flex-1" />{chips(true)}<IconButton icon="filter" label="مرشّحات أخرى" /></Row>
      </Stage>
      <Split>
        <Grid2>
          <Stage><EmptyState icon="inbox" title="لا إشعارات بانتظار المراجعة" /></Stage>
          <Stage><div aria-busy="true" aria-label="جارٍ التحميل" className="space-y-4"><div className="flex items-center gap-3"><Skeleton className="size-11" /><div className="flex-1 space-y-2"><Skeleton className="h-3.5 w-3/5" /><Skeleton className="h-2.5 w-2/5" /></div></div><Skeleton className="h-3.5" /><Skeleton className="h-3.5 w-3/4" /></div></Stage>
        </Grid2>
        <Phone className="justify-end overflow-hidden !p-0">
          <div role="dialog" aria-label="المرشّحات" className="space-y-4 rounded-t-shell bg-surface p-5 shadow-raised">
            <span className="mx-auto block h-1.5 w-10 rounded-full shadow-inset" />
            <h3 className="text-lg font-extrabold">المرشّحات</h3>
            <Row className="gap-2">{chips(false)}</Row>
            <div className="space-y-2"><Checkbox label="غزّة للسيدات" defaultChecked /><Checkbox label="النصيرات" /></div>
            <Row className="gap-2"><Button className="flex-1">اعرض 12 نتيجة</Button><Button variant="ghost">مسح</Button></Row>
          </div>
        </Phone>
      </Split>
    </Spec>
  );
}

export default function Interaction() {
  return <Chapter n="03" title="التفاعل" desc="القرارات، الرفع، التنبيهات."><TimelineSpec /><UploadSpec /><FeedbackSpec /><FilterSpec /></Chapter>;
}
