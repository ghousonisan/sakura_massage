import Icon from "../Icon";
import styles from "./MobileStickyBar.module.css";

const WHATSAPP_NUMBER = "66934162978";

export default function MobileStickyBar({ visible }) {
  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ""}`}>
      <a href={`tel:+${WHATSAPP_NUMBER}`} className={`${styles.btn} ${styles.call}`}>
        <Icon name="phone" size={18} /> Call
      </a>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className={`${styles.btn} ${styles.whatsapp}`}>
        <Icon name="whatsapp" size={18} /> WhatsApp
      </a>
    </div>
  );
}
