import Link from "next/link";
import React from "react";
import { auth } from "../_lib/auth";
import Image from "next/image";

async function Navigation() {
  const session = await auth();
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
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            Guest area
            {session?.user?.image ? (
              <span className="">
                <Image
                  width={27}
                  height={27}
                  src={session?.user?.image!}
                  className="rounded-full"
                  alt={session?.user?.name!}
                />
              </span>
            ) : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
