import Link from "next/link";
import React from "react";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <div className="flex flex-col gap-1 w-fit">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cabins">Cabins</Link>
      <Link href="/account">Account</Link>
    </div>
  );
};

export default Navigation;
