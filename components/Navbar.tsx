import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          width={32}
          height={32}
          alt="BoardRoom"
          className="max-sm:size-10"
        />
        <p className="pl-2 text-[26px] font-extrabold text-white max-sm:hidden">
          BoardRoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User Management*/}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
