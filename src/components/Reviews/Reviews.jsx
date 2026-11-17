import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import Reveal from "../Reveal";
import useReveal from "../../hooks/useReveal";
import shared from "../../styles/shared.module.css";
import styles from "./Reviews.module.css";

function useCountUp(target, duration = 1200) {
  const [ref, inView] = useReveal();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return [ref, value];
}

export default function Reviews() {
  const [ratingRef, ratingValue] = useCountUp(4.9);

  return (
    <section className={`${shared.section} ${styles.reviewSpotlight}`} id="reviews">
      <Reveal className={styles.ratingBlock}>
        <p className={`${shared.eyebrow} ${shared.eyebrowGold500}`}>05 — Guests</p>
        <p className={`${styles.ratingNum} ${shared.goldGrad}`} ref={ratingRef}>
          {ratingValue.toFixed(1)}
        </p>
        <div className={styles.ratingStars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon key={i} name="star" size={22} />
          ))}
        </div>
        <p className={styles.ratingSub}>[N] reviews on Google · only if real</p>
        <a href="#" className={`${shared.btn} ${shared.btnOutlineGold}`}>
          <Icon name="star" size={20} />
          Read all reviews
        </a>
      </Reveal>

      <Reveal className={styles.quoteBlock}>
        <p className={styles.quoteMark}>&ldquo;</p>
        <p className={styles.quoteBig}>
          [Real guest review copied from Google Maps with permission. Two or three sentences read best here.]
        </p>
        <div className={styles.quotePerson}>
          <span className={styles.avatar} />
          <div>
            <p className={styles.personName}>[Name]</p>
            <p className={styles.personMeta}>[Country] · [Hotel]</p>
          </div>
        </div>
        <div className={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <button key={i} className={`${styles.dot} ${i === 0 ? styles.dotActive : ""}`} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
