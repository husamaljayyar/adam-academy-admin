import { Chapter, Spec, Stage, Sub, Row, Grid2, Split, Phone } from '../../components/library/Spec';
import { Button, IconButton } from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import TextField from '../../components/library/TextField';
import { Checkbox, RadioCard } from '../../components/library/Choice';
import { SelectField } from '../../components/ui/Field';
import StatusBadge from '../../components/library/StatusBadge';
import { buttonRows, buttonStates, branches, groupsChoices, registrationStatuses, statusGroups } from '../../data/library';

function ButtonsSpec() {
  return (
    <Spec id="buttons" title="الأزرار" desc="أربعة أنواع. زرٌّ أساسيٌّ واحد في كلّ شاشة، وحالة التحميل لا تغيّر عرض الزرّ.">
      <Stage>
        <div className="grid grid-cols-[auto_repeat(4,max-content)] items-center gap-x-4 gap-y-5 overflow-x-auto p-2">
          <span />
          {buttonStates.map((s) => <Sub key={s}>{s}</Sub>)}
          {buttonRows.map(([label, variant, text]) => (
            <div key={variant} className="contents">
              <span className="text-xs font-bold">{label}</span>
              <Button variant={variant}>{text}</Button>
              <Button variant={variant} className="!shadow-[theme(boxShadow.raised-sm),theme(boxShadow.focus)]">{text}</Button>
              <Button variant={variant} disabled>{text}</Button>
              <Button variant={variant} loading>{text}</Button>
            </div>
          ))}
        </div>
      </Stage>
      <Grid2>
        <Stage><Sub>المقاسات</Sub><Row><Button variant="soft" size="sm">تعديل</Button><Button variant="soft">تعديل</Button><Button variant="soft" size="lg">تعديل</Button></Row></Stage>
        <Stage>
          <Sub>الاتّجاه وزرّ الأيقونة</Sub>
          <Row>
            <Button variant="soft" icon="chevronstart">رجوع</Button>
            <Button variant="soft">التالي<Icon name="chevronend" className="size-4" /></Button>
            <IconButton icon="filter" label="المرشّحات" /><IconButton icon="bell" label="التنبيهات" count={3} />
          </Row>
        </Stage>
      </Grid2>
    </Spec>
  );
}

function FieldsSpec() {
  return (
    <Spec id="fields" title="الحقول" desc="التسمية فوق الحقل دائماً، والمساعدة أو الخطأ تحته. الأرقام لاتينيّة لأنّ المتقدّم يقارنها بتطبيق المحفظة.">
      <Split>
        <Stage>
          <Sub>الحالات</Sub>
          <Grid2 className="gap-y-6">
            <TextField label="الاسم الكامل" required defaultValue="سارة أحمد" hint="كما في الهويّة" />
            <TextField label="رقم الجوّال" required prefix="+970" dir="ltr" defaultValue="052 123" error="الرقم غير صحيح. أدخل 10 أرقام تبدأ بـ 059 أو 056." />
            <TextField label="المبلغ المحوَّل" required suffix="₪" dir="ltr" inputMode="decimal" defaultValue="400" />
            <TextField label="الرقم المرجعيّ" disabled defaultValue="AA-7K3Q-9XMD" dir="ltr" />
            <TextField label="تاريخ التحويل" icon="calendar" type="date" dir="ltr" defaultValue="2026-10-14" />
            <TextField label="ملاحظة" multiline hint="اختياريّ" />
          </Grid2>
        </Stage>
        <Phone>
          <p className="text-base font-bold">التسجيل في الكوافير الشاملة</p>
          <label className="space-y-1.5"><span className="text-xs font-bold">الفرع <span className="text-danger">*</span></span><SelectField icon={null} options={branches} /></label>
          <div className="space-y-2"><Sub>المجموعة</Sub>{groupsChoices.map((g, i) => <RadioCard key={g.id} name="grp" label={g.label} description={g.description} defaultChecked={i === 0} />)}</div>
          <TextField label="رقم الجوّال" required prefix="+970" dir="ltr" inputMode="tel" defaultValue="059 944 0919" />
          <Checkbox label="أوافق على شروط التسجيل" defaultChecked />
          <Button block>أرسل الطلب</Button>
        </Phone>
      </Split>
    </Spec>
  );
}

function StatusSpec() {
  return (
    <Spec id="status" title="شارة الحالة" desc="شكلٌ واحد في كلّ مكان: نصّ، وأيقونة بلون الحالة داخل بئرٍ مضغوط.">
      <Stage><Sub>التسجيل</Sub><Row>{registrationStatuses.map((s) => <StatusBadge key={s} status={s} />)}</Row></Stage>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {statusGroups.map(([title, list]) => (
          <Stage key={title}><Sub>{title}</Sub><div className="flex flex-col items-start gap-3">{list.map((s) => <StatusBadge key={s} status={s} size="sm" />)}</div></Stage>
        ))}
      </div>
    </Spec>
  );
}

export default function Basics() {
  return <Chapter n="01" title="الأساسيّات" desc="الأزرار والحقول وشارة الحالة."><ButtonsSpec /><FieldsSpec /><StatusSpec /></Chapter>;
}
