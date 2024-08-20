import Link from "next/link";
import React from "react";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-8 sm:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
