import Icon from "../Icon";
import shared from "../../styles/shared.module.css";
import styles from "./Nav.module.css";

export default function Nav({ scrolled, onBurgerClick }) {
  return (
    <nav className={`${styles.navPill} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#hero" className={styles.navLogo}>
        <img src="/assets/images/logo-mark.svg" alt="" className={styles.navLogoMark} />
        <span className={styles.navWordmark}>
          <strong>SAKURA</strong>
          <small>MASSAGE</small>
        </span>
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#treatments">Treatments</a></li>
        <li><a href="#why-sakura">Why Sakura</a></li>
        <li><a href="#therapists">Therapists</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <a href="#booking" className={`${shared.btn} ${shared.btnGold} ${shared.btnSm}`}>
        <Icon name="whatsapp" size={20} />
        Book now
      </a>

      <button className={styles.navBurger} aria-label="Open menu" onClick={onBurgerClick}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
