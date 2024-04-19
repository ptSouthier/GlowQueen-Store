import FaceMassage from "@/src/components/icons/FaceMassage";
import Lotus from "@/src/components/icons/Lotus";
import Mortar from "@/src/components/icons/Mortar";


export default function ServicesCards() {
  return (
    <section className="col-start-2 col-end-6 mt-[5.625rem] w-[40.1875rem] backdrop-blur-[0.5rem] bg-white/[.80] flex p-8 justify-between">
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
