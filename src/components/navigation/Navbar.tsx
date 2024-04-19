import GlowQueenMarkdown from "@/src/components/icons/GlowQueenMarkdown";
import ChevronDown from "@/src/components/icons/ChevronDown";
import SearchIcon from "@/src/components/icons/SearchIcon";
import ShoppingBag from "@/src/components/icons/ShoppingBag";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="col-start-2 col-end-13 flex items-center w-full mt-11">
      <div className="basis-1/5 flex">
        <GlowQueenMarkdown />
      </div>
      <ul className="flex basis-2/5 justify-center gap-[3.5rem] mr-28 leading-[27px] text-primary">
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
      <div className="basis-1/4 flex justify-between text-primary">
        <div className="flex gap-4 ml-12">
          <button className="mr-3">
            <SearchIcon size="24" className="hover:text-white duration-200" />
          </button>
          <button>
            <ShoppingBag size="24" className="hover:text-white duration-200" />
          </button>
        </div>
        <div className="flex gap-4 pr-10">
          <button className="hover:text-white hover:underline duration-200">
            Sign In
          </button>
          <button className="bg-primary hover:bg-cyan-700 hover:py-4 hover:px-11 duration-200 font-light text-white py-[0.9rem] px-10 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
