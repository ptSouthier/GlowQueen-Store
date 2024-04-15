import HomepageBackground from "@/src/components/backgrounds/HomepageBackground";
import Navbar from "@/src/components/navigation/Navbar";
import ServicesCards from "@/src/components/infos/ServicesCards";
import Play from "@/src/components/icons/Play";
import Testimonies from "@/src/components/infos/Testimonies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomepageBackground />
      <Navbar />

      <div className="relative left-[10rem] top-[5rem] w-[50.5625rem] h-[24.25rem]">
        <h1 className="text-[4rem] text-primary font-bold leading-[5rem] h-[10rem] mb-8">
          Bring back the beauty
          <br/>and glow of your skin
        </h1>
        <span className="text-[1.5rem] text-tertiary leading-[2.5rem] h-[5rem]">
        We provide you various treatments from head to toe using the
        <br/>best product, advanced technology, and affordable price
        </span>
        <div className="mt-14 flex gap-8">
          <button className="bg-primary hover:bg-cyan-700 duration-200 font-light text-white w-[11.25rem] h-[3.75rem] rounded-full">
            Book Now
          </button>
          <button className="flex gap-4 items-center justify-center text-primary hover:font-bold duration-100 w-[15rem] h-[3.75rem] rounded-full">
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
