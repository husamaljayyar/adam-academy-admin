import Icon from '../ui/Icon';
import { toneText } from '../../lib/tones';

 const states = {
  normal: { tone: 'gold', title: 'ينتهي الثلاثاء 2:30 م', sub: '(بعد ساعتين و10 دقائق)' },
  soon: { tone: 'gold', title: 'ينتهي اليوم 2:30 م', sub: '(بعد 42 دقيقة) — أقلّ من ساعة' },
  ended: { tone: 'muted', title: 'انتهت المهلة الثلاثاء 2:30 م', sub: 'لم يعد المقعد محجوزاً' },
};

export default function Countdown({ state = 'normal' }) {
  const s = states[state];
  return (
    <div role="timer" className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-inset">
      <span className={`grid size-9 shrink-0 place-items-center rounded-full bg-surface shadow-raised-sm ${toneText[s.tone]}`}><Icon name="clock" className="size-[18px]" /></span>
      <div className="min-w-0">
        <p className="text-[13px] font-bold">{s.title}</p>
        <p className={`text-xs ${state === 'soon' ? 'text-gold' : 'text-ink-soft'}`}>{s.sub}</p>
      </div>
    </div>
  );
}
