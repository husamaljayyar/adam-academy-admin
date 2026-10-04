import { Card, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import ActivityItem from '../ui/ActivityItem';

export default function TodayActivity({ items, className }) {
  return (
    <Card className={className}>
      <CardHeader icon="bell" title="نشاط اليوم" action={<Button variant="link">الكلّ</Button>} />
      <ul className="mt-6 space-y-0">
        {items.map((item) => <ActivityItem key={item.title} {...item} />)}
      </ul>
    </Card>
  );
}
