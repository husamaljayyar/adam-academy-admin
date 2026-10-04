 export const money = (n) => `${n.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2 })} ₪`;

 const unit = (n, one, two, few, many) => (n === 1 ? one : n === 2 ? two : n <= 10 ? `${n} ${few}` : `${n} ${many}`);
export const ago = (min) => {
  if (min < 60) return `منذ ${unit(min, 'دقيقة', 'دقيقتين', 'دقائق', 'دقيقة')}`;
  const h = Math.floor(min / 60);
  const half = min % 60 >= 30 ? ' ونصف' : '';
  return `منذ ${unit(h, 'ساعة', 'ساعتين', 'ساعات', 'ساعة')}${half}`;
};
