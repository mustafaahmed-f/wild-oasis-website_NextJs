import { Metadata } from "next";

interface pageProps {}

export const metadata: Metadata = {
  title: "Account",
};

async function page() {
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-4">
      Welcome ! Mustafa
    </h2>
  );
}

export default page;
