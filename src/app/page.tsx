import Image from "next/image";
import HomeSection from "../components/sections/Home";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Partners from "@/components/sections/Partners";
import Magazine from "@/components/sections/Magazine";

export default function Home() {
  return (
    <div className="bg-white">
      <section>
        <HomeSection />
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <WhyChooseUs/>
      </section>
      <section>
        <Partners/>
      </section>
      <section>
        <Magazine/>
      </section>
    </div>
  );
}
