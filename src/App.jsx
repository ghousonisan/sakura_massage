import { useEffect, useRef, useState } from "react";
import IconSprite from "./components/IconSprite/IconSprite";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import WhySakura from "./components/WhySakura/WhySakura";
import Treatments from "./components/Treatments/Treatments";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Therapists from "./components/Therapists/Therapists";
import Reviews from "./components/Reviews/Reviews";
import Booking from "./components/Booking/Booking";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import MobileStickyBar from "./components/MobileStickyBar/MobileStickyBar";
import BookingPopup from "./components/BookingPopup/BookingPopup";

export default function App() {
  const heroRef = useRef(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return;
      setStickyVisible(heroRef.current.getBoundingClientRect().bottom < 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <IconSprite />
      <Hero heroRef={heroRef} onBurgerClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })} />
      <Marquee />
      <WhySakura />
      <Treatments />
      <HowItWorks />
      {/* <Therapists /> */}
      <Reviews />
      <Booking />
      <Faq />
      <Footer />
      <MobileStickyBar visible={stickyVisible} />
      <BookingPopup />
    </>
  );
}
