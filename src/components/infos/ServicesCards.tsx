import FaceMassage from "@/src/components/icons/FaceMassage";
import Lotus from "@/src/components/icons/Lotus";
import Mortar from "@/src/components/icons/Mortar";


export default function ServicesCards() {
  return (
    <section className="w-[40.1875rem] h-[17.75rem] top-[5.625rem] left-[10rem] relative backdrop-blur-[0.5rem] bg-white/[.80] flex gap-[4.5rem] p-8 justify-between">
        <div className="serviceCard">
          <FaceMassage />
          <h2>15+</h2>
          <p>Special</p>
          <p>Treatment</p>
        </div>
        <div className="serviceCard">
          <Lotus />
          <h2>25+</h2>
          <p>Professional</p>
          <p>Therapist</p>
        </div>
        <div className="serviceCard">
          <Mortar />
          <h2>100%</h2>
          <p>Herbal</p>
          <p>Cream Formula</p>
        </div>
    </section>
  );
}
