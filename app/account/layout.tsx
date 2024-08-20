import React from "react";
import SideNavigation from "../_Components/SideNavigation";

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid sm:grid-rows-[auto] grid-cols-[auto] grid-rows-[auto_1fr] sm:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="px-6">{children}</div>
    </div>
  );
};

export default layout;
