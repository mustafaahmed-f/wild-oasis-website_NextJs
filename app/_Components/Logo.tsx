import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-dark.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image height="60" width="60" src={logo} alt="The Wild Oasis logo" />
      <span className="hidden sm:block text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
