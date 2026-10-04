import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import Pill from '../ui/Pill';
import Ring from '../ui/Ring';

export default function NearestDeadline({ name, place, minutes, windowMinutes, late }) {
  return (
    <Card className="flex flex-col">
      <CardHeader icon="clock" iconTone="gold" solid title="أقرب مهلة" action={late > 0 && <Pill tone="danger" dot>{late} متأخرة</Pill>} />
      <div className="flex flex-1 flex-col items-center py-5 text-center">
        <Ring value={minutes} max={windowMinutes} stroke={6} color="text-gold" className="w-36">
          <div>
            <p className="text-3xl font-extrabold leading-none">{minutes}</p>
            <p className="mt-1 text-[11px] text-ink-soft">دقيقة</p>
          </div>
        </Ring>
        <h4 className="mt-5 text-xl font-extrabold">{name}</h4>
        <p className="mt-1 text-[11px] text-ink-soft">{place}</p>
      </div>
      <Button variant="soft" className="w-full">راجِعها الآن</Button>
    </Card>
  );
}
