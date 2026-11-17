import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./HowItWorks.module.css";

const STEPS = [
  { num: "01", icon: "whatsapp", title: "Message us", text: "Send your location and preferred time on WhatsApp or LINE." },
  { num: "02", icon: "clock", title: "We confirm", text: "Your therapist and time are confirmed within minutes." },
  { num: "03", icon: "map-pin", title: "We arrive", text: "Visit our studio, or we come to your hotel, condo or villa." },
  { num: "04", icon: "leaf", title: "You relax", text: "Breathe out. We take care of the rest.", final: true },
];

export default function HowItWorks() {
  return (
    <section className={`${shared.section} ${styles.howItWorks}`}>
      <Reveal className={shared.splitHeader}>
        <div className={shared.splitLeft}>
          <p className={`${shared.eyebrow} ${shared.eyebrowGold700}`}>03 — How it works</p>
          <h2 className={shared.hXl}>Your ritual in four steps.</h2>
        </div>
      </Reveal>

      <div className={styles.steps}>
        {STEPS.map((s) => (
          <Reveal as="div" className={styles.step} key={s.num}>
            <div className={styles.stepTop}>
              <span className={`${styles.stepIcon} ${s.final ? styles.stepIconFinal : ""}`}>
                <Icon name={s.icon} size={30} />
              </span>
              <span className={`${styles.stepLine} ${s.final ? styles.stepLineHidden : ""}`} />
            </div>
            <div className={styles.stepBody}>
              <div className={styles.stepHeading}>
                <p className={styles.stepNum}>{s.num}</p>
                <h3 className={styles.stepTitle}>{s.title}</h3>
              </div>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
