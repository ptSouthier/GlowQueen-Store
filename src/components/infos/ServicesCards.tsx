import FaceMassage from "@/src/components/icons/FaceMassage";
import Lotus from "@/src/components/icons/Lotus";
import Mortar from "@/src/components/icons/Mortar";


export default function ServicesCards() {
  return (
    <section className="col-start-2 col-end-6 mt-14 xl:mt-[5.15rem] 2xl:mt-[5.625rem] w-[32rem] xl:w-[36rem] 2xl:w-[40rem] backdrop-blur-[0.5rem] bg-white/[.80] flex px-7 xl:px-8 py-8 justify-between">
        <div className="serviceCard">
          <FaceMassage className="iconResponsiveScale" />
          <h2>15+</h2>
          <p>Special</p>
          <p>Treatment</p>
        </div>
        <div className="serviceCard">
          <Lotus className="iconResponsiveScale" />
          <h2>25+</h2>
          <p>Professional</p>
          <p>Therapist</p>
        </div>
        <div className="serviceCard">
          <Mortar className="iconResponsiveScale" />
          <h2>100%</h2>
          <p>Herbal</p>
          <p>Cream Formula</p>
        </div>
    </section>
  );
}
