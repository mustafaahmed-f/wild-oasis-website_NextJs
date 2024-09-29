import { Metadata } from "next";
import React from "react";
import { auth } from "../_lib/auth";

interface pageProps {}

export const metadata: Metadata = {
  title: "Account",
};

async function page() {
  const session = await auth();
  // console.log(session);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-4">
      Welcome ! Mustafa
    </h2>
  );
}

export default page;
