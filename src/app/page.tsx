import Image from "next/image";
import HomeSection from "../components/sections/Home";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="bg-white">
      <section>
        <HomeSection />
      </section>
      <section>
        <Services/>
      </section>
    </div>
  );
}
