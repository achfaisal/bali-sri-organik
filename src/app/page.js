import NavbarComponent from "@/components/Navbar";

import FadeSection from "@/components/FadeSection";
import Section1 from "@/components/Section1";
import Timeline from "@/components/Timeline";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Section1 />
      <FadeSection />
      <Timeline />
      <section id="footer">
        <footer className="footer footer-center bg-slate-700 text-white p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - Bali Sri Organik</p>
          </aside>
        </footer>
      </section>
    </>
  );
}
