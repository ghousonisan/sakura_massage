import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./Therapists.module.css";

const CARD_WIDTH = 264 + 24;

const THERAPISTS = [
  "/assets/images/therapist-portrait.png",
  "/assets/images/bento-tile.png",
  "/assets/images/therapist-portrait.png",
  "/assets/images/bento-tile.png",
  "/assets/images/therapist-portrait.png",
  "/assets/images/bento-tile.png",
];

export default function Therapists() {
  const [index, setIndex] = useState(0);
  const viewportRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, startIndexPx: 0 });
  const [dragPx, setDragPx] = useState(null);

  function maxIndex() {
    const visible = viewportRef.current
      ? Math.max(1, Math.floor(viewportRef.current.clientWidth / CARD_WIDTH))
      : 1;
    return Math.max(0, THERAPISTS.length - visible);
  }

  function clamp(i) {
    return Math.max(0, Math.min(i, maxIndex()));
  }

  useEffect(() => {
    const onResize = () => setIndex((i) => clamp(i));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function onPointerDown(e) {
    dragRef.current = { isDown: true, startX: e.clientX, startIndexPx: -index * CARD_WIDTH };
  }
  function onPointerMove(e) {
    if (!dragRef.current.isDown) return;
    setDragPx(dragRef.current.startIndexPx + (e.clientX - dragRef.current.startX));
  }
  function onPointerUp(e) {
    if (!dragRef.current.isDown) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.isDown = false;
    setDragPx(null);
    if (dx < -60) setIndex((i) => clamp(i + 1));
    else if (dx > 60) setIndex((i) => clamp(i - 1));
  }

  const translate = dragPx !== null ? dragPx : -index * CARD_WIDTH;

  return (
    <section className={`${shared.section} ${styles.therapists}`} id="therapists">
      <Reveal className={styles.headerRow}>
        <div className={shared.splitLeft}>
          <p className={`${shared.eyebrow} ${shared.eyebrowGold700}`}>04 — Our therapists</p>
          <h2 className={shared.hXl}>Hands you can trust.</h2>
        </div>
        <p className={`${shared.splitDesc} ${styles.headerDesc}`}>Real portraits only, with consent. [Hide until ready]</p>
        <div className={styles.carouselArrows}>
          <button
            className={`${styles.circleBtn} ${styles.circleBtnOutline}`}
            aria-label="Previous"
            onClick={() => setIndex((i) => clamp(i - 1))}
          >
            <Icon name="arrow-right" size={22} className={styles.rotate180} />
          </button>
          <button
            className={`${styles.circleBtn} ${styles.circleBtnDark}`}
            aria-label="Next"
            onClick={() => setIndex((i) => clamp(i + 1))}
          >
            <Icon name="arrow-right" size={22} />
          </button>
        </div>
      </Reveal>

      <div className={styles.carouselViewport} ref={viewportRef}>
        <div
          className={styles.therapistTrack}
          style={{ transform: `translateX(${translate}px)`, transition: dragPx !== null ? "none" : undefined }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {THERAPISTS.map((src, i) => (
            <div className={styles.therapist} key={i}>
              <div className={styles.portraitArch}>
                <img src={src} alt="Therapist portrait" draggable="false" />
                <span className={styles.tag}>[Speciality]</span>
              </div>
              <p className={styles.therapistName}>[First name]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
