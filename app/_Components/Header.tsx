import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-3 sm:gap-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
