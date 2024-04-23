import GlowQueenMarkdown from "@/src/components/icons/GlowQueenMarkdown";
import ChevronDown from "@/src/components/icons/ChevronDown";
import SearchIcon from "@/src/components/icons/SearchIcon";
import ShoppingBag from "@/src/components/icons/ShoppingBag";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="col-start-2 col-end-13 flex items-center w-full mt-11">
      <div className="basis-1/4 xl:basis-1/5 flex">
        <GlowQueenMarkdown />
      </div>
      <ul className="flex basis-2/4 xl:basis-2/5 text-sm xl:text-base place-content-center gap-[3.5rem] mr-20 xl:mr-24 2xl:mr-28 xl:leading-[1.4rem] 2xl:leading-[1.6875rem] text-primary">
        <li>
          <Link href="#" className="hover:text-secondary duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-secondary duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-secondary duration-200">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-secondary duration-200">
            Facilities
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-secondary duration-200 text-center flex">
            More <ChevronDown className="mt-0.5 ml-0.5" />
          </Link>
        </li>
      </ul>
      <div className="basis-1/3 2xl:basis-1/4 text-sm xl:text-base flex justify-between text-primary">
        <div className="flex gap-2 xl:gap-3 2xl:gap-4 ml-0 xl:ml-6 2xl:ml-12">
          <button className="mr-3">
            <SearchIcon size="24" className="hover:text-white duration-200" />
          </button>
          <button>
            <ShoppingBag size="24" className="hover:text-white duration-200" />
          </button>
        </div>
        <div className="flex gap-3 xl:gap-4 xl:mr-20 2xl:mr-0 pr-10">
          <button className="hover:text-white hover:underline hover:scale-105 duration-200">
            Sign In
          </button>
          <button className="bg-primary hover:bg-cyan-700 hover:scale-105 duration-200 font-light text-white py-[0.9rem] px-10 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
