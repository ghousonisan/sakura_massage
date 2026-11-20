import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./Treatments.module.css";

const TREATMENTS = [
  {
    index: "01",
    title: "Traditional Thai Massage",
    desc: "Stretching and acupressure along the body's energy lines.",
    price: "THB 600",
    photo: "/assets/images/hero-detail.png",
    gold: false,
  },
  {
    index: "02",
    title: "Aroma Oil Massage",
    desc: "Long, flowing strokes with warm aromatic oils.",
    price: "THB 600",
    photo: "/assets/images/treatment-hover.png",
    gold: true,
  },
  {
    index: "03",
    title: "Four Hands Massage",
    desc: "Two therapists in perfect rhythm.",
    price: "THB 1,200",
    photo: "/assets/images/bento-tile.png",
    gold: false,
  },
];

const DEFAULT_PHOTO = "/assets/images/treatment-hover.png";

export default function Treatments() {
  const [hoverSrc, setHoverSrc] = useState(DEFAULT_PHOTO);

  return (
    <section className={`${shared.section} ${styles.treatments}`} id="treatments">
      <Reveal className={shared.splitHeader}>
        <div className={shared.splitLeft}>
          <p className={`${shared.eyebrow} ${shared.eyebrowGold500}`}>Treatments</p>
          <h2 className={`${shared.hXl} ${shared.goldGrad}`}>Choose your ritual.</h2>
        </div>
        <p className={`${shared.splitDesc} ${shared.splitDescLight} ${styles.headerDesc}`}>
          Every treatment comes in 60, 90 or 120 minutes (90 min is 1.5×, 120 min is 2× the 60-min price).
          Tap one to open WhatsApp.
        </p>
      </Reveal>

      <div className={styles.treatmentList}>
        {TREATMENTS.map((t) => (
          <Reveal
            as="a"
            key={t.index}
            href="#"
            className={styles.treatmentRow}
            onMouseEnter={() => setHoverSrc(t.photo)}
            onMouseLeave={() => setHoverSrc(DEFAULT_PHOTO)}
          >
            <span className={styles.tTop}>
              <span className={styles.tIndex}>{t.index}</span>
              <span className={styles.tTitleWrap}>
                <span className={`${styles.tTitle} ${t.gold ? shared.goldGrad : ""}`}>{t.title}</span>
                <span className={styles.tDesc}>{t.desc}</span>
              </span>
            </span>
            <span className={styles.tMeta}>
              <span className={styles.tDurations}>
                <span className={styles.pill}>60 min</span>
                <span className={styles.pill}>90 min</span>
                <span className={styles.pill}>120 min</span>
              </span>
              <span className={styles.tPrice}>
                <span className={styles.tFrom}>from</span>
                <span className={styles.tAmount}>{t.price}</span>
              </span>
            </span>
            <span className={styles.tCircle}>
              <Icon name="arrow-right" size={22} />
            </span>
          </Reveal>
        ))}
      </div>

      <div className={styles.cursorPhotoWrap}>
        <img className={styles.cursorPhoto} src={hoverSrc} alt="" />
      </div>

      <p className={styles.finePrint}>
        Prices in Thai baht. Travel within central Pattaya is included; far-out areas may add a small fee,
        confirmed when you book.
      </p>
    </section>
  );
}
