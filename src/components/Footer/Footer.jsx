import Icon from "../Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.footerTagline}>
          Authentic Thai massage,<br />in our studio or at your door.
        </p>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Explore</p>
          <a href="#treatments">Treatments</a>
          <a href="#why-sakura">Why Sakura</a>
          <a href="#therapists">Therapists</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Visit</p>
          <span>[Shop address]</span>
          <span>[Hours]</span>
          <span>[Phone number]</span>
          <span>[Email]</span>
        </div>

        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Follow</p>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialBtn} aria-label="Facebook"><Icon name="facebook" size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="Instagram"><Icon name="instagram" size={20} /></a>
            <a href="#" className={styles.socialBtn} aria-label="TikTok"><Icon name="tiktok" size={20} /></a>
          </div>
        </div>
      </div>

      <p className={styles.footerWordmark}>SAKURA</p>

      <div className={styles.footerBottom}>
        <p>© 2026 Sakura Massage. All rights reserved.</p>
        <a href="#hero">Back to top ↑</a>
      </div>
    </footer>
  );
}
