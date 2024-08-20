import { Metadata } from "next";
import React from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "Account",
};

const page: React.FC<pageProps> = ({}) => {
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-4">
      Welcome ! Mustafa
    </h2>
  );
};

export default page;
