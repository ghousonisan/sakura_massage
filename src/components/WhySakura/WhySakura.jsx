import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./WhySakura.module.css";

export default function WhySakura() {
  return (
    <section className={`${shared.section} ${styles.whySakura}`} id="why-sakura">
      <Reveal className={shared.splitHeader}>
        <div className={shared.splitLeft}>
          <p className={`${shared.eyebrow} ${shared.eyebrowGold700}`}>Why Sakura</p>
          <h2 className={`${shared.hXl} ${styles.heading}`}>Care you can feel,<br />from the first touch.</h2>
        </div>
        <p className={`${shared.splitDesc} ${styles.desc}`}>
          A family-run studio rooted in Thai tradition. Every session is unhurried, every room is fresh,
          and every therapist is trained in the classical Wat Pho method [EDIT].
        </p>
      </Reveal>

      <div className={`${styles.bentoRow} ${styles.bentoRow1}`}>
        <Reveal className={`${styles.bentoTile} ${styles.tilePhoto}`}>
          <img src="/assets/images/hero-banner.png" alt="Sakura Massage & Spa therapist giving a traditional Thai massage" />
          <div className={styles.tileOverlay}>
            <h3 className={`${styles.tileTitle} ${shared.gold}`}>Authentic Thai techniques</h3>
            <p className={styles.tileText}>
              Stretching, acupressure and rhythmic compression passed down by Thai masters.
            </p>
          </div>
        </Reveal>

        <Reveal className={`${styles.bentoTile} ${styles.tileDark}`}>
          <Icon name="award" size={48} />
          <div>
            <p className={`${styles.tileNumber} ${shared.goldGrad}`}>[8]</p>
            <p className={styles.tileSub}>Certified therapists</p>
          </div>
        </Reveal>

        <Reveal className={`${styles.bentoTile} ${styles.tileGold}`}>
          <Icon name="map-pin" size={48} />
          <div>
            <h3 className={styles.tileTitleDark}>We come<br />to you.</h3>
            <p className={styles.tileTextDark}>Hotel, condo or villa across [service area].</p>
          </div>
        </Reveal>
      </div>

      <div className={`${styles.bentoRow} ${styles.bentoRow2}`}>
        <Reveal className={`${styles.bentoTile} ${styles.tileSmall}`}>
          <Icon name="shield" size={40} />
          <div>
            <h3 className={styles.tileTitleSm}>Clean &amp; hygienic</h3>
            <p className={styles.tileTextMuted}>Fresh linens, sanitised tools, every guest.</p>
          </div>
        </Reveal>

        <Reveal className={`${styles.bentoTile} ${styles.tileSmall}`}>
          <Icon name="clock" size={40} />
          <div>
            <h3 className={styles.tileTitleSm}>Open late, every day</h3>
            <p className={styles.tileTextMuted}>[10:00 – 24:00] · Same-day booking</p>
          </div>
        </Reveal>

        <Reveal className={`${styles.bentoTile} ${styles.tileQuote}`}>
          <div className={styles.quoteStars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star-fill" size={16} />
            ))}
          </div>
          <p className={styles.quoteText}>&ldquo;[Short real guest quote]&rdquo;</p>
          <p className={styles.quoteBy}>[Name] · Google review</p>
        </Reveal>
      </div>
    </section>
  );
}
