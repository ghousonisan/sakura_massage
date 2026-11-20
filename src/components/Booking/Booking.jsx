import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../Reveal";
import shared from "../../styles/shared.module.css";
import styles from "./Booking.module.css";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "Traditional Thai", datetime: "", location: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks, ${form.name || "there"}! We will reply on WhatsApp shortly.`);
    setForm({ name: "", phone: "", treatment: "Traditional Thai", datetime: "", location: "" });
  }

  return (
    <section className={`${shared.section} ${styles.booking}`} id="booking">
      <Reveal className={styles.contactPanel}>
        {/* <p className={`${shared.eyebrow} ${shared.eyebrowGold500}`}>06 — Book</p> */}
        <h2 className={`${shared.hXl} ${shared.goldGrad}`}>Book in under<br />two minutes.</h2>
        <p className={styles.panelDesc}>
          Send your location and preferred time. We confirm in minutes, every day until [24:00].
        </p>

        <a href="https://wa.me/" className={styles.contactRow}>
          <span className={styles.contactIcon}><Icon name="whatsapp" size={22} /></span>
          <span className={styles.contactText}>
            <span className={styles.contactLabel}>WhatsApp</span>
            <span className={styles.contactValue}>[WhatsApp number]</span>
          </span>
          <Icon name="arrow-right" size={22} />
        </a>
        <a href="#" className={styles.contactRow}>
          <span className={styles.contactIcon}><Icon name="line" size={22} /></span>
          <span className={styles.contactText}>
            <span className={styles.contactLabel}>LINE</span>
            <span className={styles.contactValue}>[LINE ID]</span>
          </span>
          <Icon name="arrow-right" size={22} />
        </a>
        <a href="tel:" className={styles.contactRow}>
          <span className={styles.contactIcon}><Icon name="phone" size={22} /></span>
          <span className={styles.contactText}>
            <span className={styles.contactLabel}>Call</span>
            <span className={styles.contactValue}>[Phone number]</span>
          </span>
          <Icon name="arrow-right" size={22} />
        </a>
      </Reveal>

      <Reveal as="form" className={styles.bookingForm} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>Or send a request</h3>

        <label className={styles.field}>
          <span>Your name</span>
          <input type="text" placeholder="e.g. Anna" value={form.name} onChange={update("name")} />
        </label>

        <label className={styles.field}>
          <span>WhatsApp or phone</span>
          <input type="tel" placeholder="+66 …" value={form.phone} onChange={update("phone")} />
        </label>

        <div className={styles.fieldRow}>
          <label className={styles.field}>
            <span>Treatment</span>
            <select value={form.treatment} onChange={update("treatment")}>
              <option>Traditional Thai</option>
              <option>Aroma Oil Massage</option>
              <option>Four Hands Massage</option>
            </select>
          </label>
          <label className={styles.field}>
            <span>Date &amp; time</span>
            <input type="text" placeholder="Today, 19:00" value={form.datetime} onChange={update("datetime")} />
          </label>
        </div>

        <label className={styles.field}>
          <span>Location</span>
          <input type="text" placeholder="Studio / hotel name / condo" value={form.location} onChange={update("location")} />
        </label>

        <button type="submit" className={`${shared.btn} ${shared.btnGold} ${shared.btnFull}`}>
          <Icon name="whatsapp" size={20} />
          Send request
        </button>
        <p className={styles.formNote}>We reply within minutes on WhatsApp.</p>
      </Reveal>
    </section>
  );
}
