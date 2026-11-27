import { useEffect, useState } from "react";
import Icon from "../Icon";
import shared from "../../styles/shared.module.css";
import styles from "./BookingPopup.module.css";

const WHATSAPP_NUMBER = "66934162978";
const WHATSAPP_DISPLAY = "+66 93 416 2978";
const BOOKING_MESSAGE = encodeURIComponent("Hi! I'd like to book a massage.");
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MESSAGE}`;
const DISMISS_KEY = "sakura_booking_popup_dismissed";
const SHOW_DELAY_MS = 2000;

export default function BookingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={close}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={close} aria-label="Close">
          <Icon name="plus" size={18} className={styles.closeIcon} />
        </button>

        <p className={`${shared.eyebrow} ${shared.eyebrowGold500}`}>Limited slots today</p>
        <h3 id="booking-popup-title" className={styles.title}>
          Book your massage <span className={shared.gold}>today</span>
        </h3>
        <p className={styles.desc}>
          Message us on WhatsApp and we'll confirm your time and location in minutes.
        </p>

        <div className={styles.number}>
          <Icon name="phone" size={20} />
          {WHATSAPP_DISPLAY}
        </div>

        <a href={WHATSAPP_HREF} className={`${shared.btn} ${shared.btnGold} ${shared.btnFull}`} onClick={close}>
          <Icon name="whatsapp" size={20} />
          Chat on WhatsApp
        </a>
        <button className={styles.later} onClick={close}>
          Maybe later
        </button>
      </div>
    </div>
  );
}
