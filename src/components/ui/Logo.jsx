import logoMark from '../../assets/logo-mark-rose.svg';

// Uses the provided Adam Academy logo asset so the header matches the supplied design exactly.
export default function Logo({ className = 'size-12' }) {
  return <img src={logoMark} className={className} alt="أكاديمية آدم" />;
}
