import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Icon from "../Icon";
import shared from "../../styles/shared.module.css";
import styles from "./Hero.module.css";

export default function Hero({ heroRef, onBurgerClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.heroStage}>
        <div className={styles.glow} aria-hidden="true" />

        <Nav scrolled={scrolled} onBurgerClick={onBurgerClick} />

        <p className={`${shared.eyebrow} ${shared.eyebrowGold700} ${styles.eyebrowPos}`}>
          Authentic Thai Massage · [City]
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleWord}>Unwind</span>
          <span className={`${styles.titleWord} ${styles.italic} ${shared.gold}`}>the Thai</span>
          <span className={styles.titleWord}>way.</span>
        </h1>

        <p className={styles.sub}>
          Slow, attentive Thai massage by certified therapists, in our studio or at your hotel, condo or villa.
        </p>

        <div className={styles.ctas}>
          <a href="https://wa.me/" className={`${shared.btn} ${shared.btnGold}`}>
            <Icon name="whatsapp" size={20} />
            Chat on WhatsApp
          </a>
          <a href="tel:" className={`${shared.btn} ${shared.btnOutlineGold}`}>
            <Icon name="phone" size={20} />
            Call Now
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.statNum}>4.9★</p>
            <p className={styles.statLabel}>Guest rating [if real]</p>
          </div>
          <span className={styles.statDivider} />
          <div className={styles.stat}>
            <p className={styles.statNum}>[8]</p>
            <p className={styles.statLabel}>Certified therapists</p>
          </div>
          <span className={styles.statDivider} />
          <div className={styles.stat}>
            <p className={styles.statNum}>10–24</p>
            <p className={styles.statLabel}>Open daily [hours]</p>
          </div>
        </div>

        <div className={styles.photoMain}>
          <img src="/assets/images/hero-main.png" alt="Thai massage session in warm studio light" />
        </div>
        <div className={styles.photoDetail}>
          <img src="/assets/images/hero-detail.png" alt="Herbal compress and oil detail" />
        </div>

        <div className={styles.badge}>
          <img src="/assets/images/logo-mark.svg" alt="" className={styles.badgeMark} />
          <p>Book in</p>
          <p>2 min</p>
        </div>

        <div className={styles.petals} aria-hidden="true">
          <span className={`${styles.petal} ${styles.p1}`} />
          <span className={`${styles.petal} ${styles.p2}`} />
          <span className={`${styles.petal} ${styles.p3}`} />
          <span className={`${styles.petal} ${styles.p4}`} />
          <span className={`${styles.petal} ${styles.p5}`} />
          <span className={`${styles.petal} ${styles.p6}`} />
        </div>
      </div>
    </header>
  );
}
