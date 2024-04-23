import HomepageBackground from "@/src/components/backgrounds/HomepageBackground";
import Navbar from "@/src/components/navigation/Navbar";
import ServicesCards from "@/src/components/infos/ServicesCards";
import Play from "@/src/components/icons/Play";
import Testimonies from "@/src/components/infos/Testimonies";

export default function Home() {
  return (
    <main className="grid grid-cols-12 auto-rows-min">
      <HomepageBackground />
      <Navbar />

      <div className="col-start-2 col-end-7 mt-20">
        <h1 className="text-[3rem] xl:text-[3.5rem] 2xl:text-[4.15rem] text-primary font-bold leading-[4.15rem] mb-5 xl:mb-6 2xl:mb-8">
          Bring back the beauty
          <br/>and glow of your skin
        </h1>
        <span className="text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] text-tertiary leading-[2.15rem]">
        We provide you various treatments from head to toe using the
        <br/>best product, advanced technology, and affordable price
        </span>
        <div className="mt-14 flex gap-8">
          <button className="text-sm xl:text-base bg-primary hover:bg-cyan-700 hover:scale-105 duration-200 font-light text-white w-36 xl:w-40 2xl:w-44 h-10 xl:h-[3.125rem] 2xl:h-[3.75rem] rounded-full">
            Book Now
          </button>
          <button className="text-sm xl:text-base flex gap-4 items-center justify-center text-primary hover:font-bold hover:scale-105 duration-100 w-40 xl:w-[12.5rem] 2xl:w-[15rem] h-10 xl:h-[3.125rem] 2xl:h-[3.75rem] rounded-full">
            <span className="bg-white rounded-full p-3 drop-shadow-lg">
              <Play />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      <ServicesCards />

      <Testimonies />
    </main>
  );
}
