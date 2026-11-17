import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./Faq.module.css";

const FAQS = [
  { q: "Do I need to book in advance?", a: "Same-day bookings are welcome. [EDIT]" },
  { q: "What should I prepare?", a: "[ANSWER]" },
  { q: "How do I pay?", a: "[Cash / card / transfer]" },
  { q: "Is there a travel fee for outcall?", a: "[ANSWER]" },
  { q: "Can I choose my therapist?", a: "[ANSWER]" },
  { q: "What are your opening hours?", a: "[Hours]" },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${shared.section} ${styles.faq}`} id="faq">
      <Reveal className={styles.faqIntro}>
        <p className={`${shared.eyebrow} ${shared.eyebrowGold700}`}>07 — FAQ</p>
        <h2 className={shared.hXl}>Good to know.</h2>
        <p className={shared.splitDesc}>Can&rsquo;t find your answer? Message us, we reply fast.</p>
        <a href="#" className={`${shared.btn} ${shared.btnOutlineGold700}`}>
          <Icon name="whatsapp" size={20} />
          Ask on WhatsApp
        </a>
      </Reveal>

      <Reveal className={styles.accordion}>
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={styles.faqItem} key={item.q}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className={styles.faqIconWrap}>
                  <Icon name={isOpen ? "minus" : "plus"} size={24} />
                </span>
              </button>
              <p className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`}>{item.a}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
