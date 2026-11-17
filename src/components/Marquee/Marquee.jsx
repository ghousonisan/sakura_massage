import Icon from "../Icon";
import styles from "./Marquee.module.css";

const ITEMS = [
  "Traditional Thai",
  "Aroma Oil",
  "Four Hands",
  "Foot Reflexology",
  "Head & Shoulder",
  "Hotel & Villa Outcall",
];

function Group() {
  return (
    <div className={styles.marqueeGroup}>
      {ITEMS.map((item) => (
        <span key={item}>
          {item}
          <Icon name="star-fill" size={16} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.marqueeBand} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
