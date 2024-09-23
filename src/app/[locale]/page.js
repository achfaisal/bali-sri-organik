import Timeline from "@/components/Timeline";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

export default function Home() {
  return (
    <>
      {/* <NavbarComponent /> */}

      <Section1 />
      <Section2 />

      <Timeline />
      <Section3 />

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
