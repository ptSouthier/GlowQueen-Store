import HomepageBackground from "@/src/components/backgrounds/HomepageBackground";
import Navbar from "@/src/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomepageBackground />
      <Navbar />
      <h1 className="text-[4rem] text-primary font-bold leading-[5rem]">
        Bring back the beauty
        <br/>and glow of your skin
      </h1>
    </main>
  );
}
