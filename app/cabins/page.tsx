import React, { Suspense } from "react";

import { Metadata } from "next";
import CabinData from "@/app/_Components/CabinData";
import Spinner from "@/app/_Components/Spinner";
import Filter from "../_Components/Filter";
import ReservationReminder from "../_Components/ReservationReminder";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Cabins",
};

async function Page({ searchParams }: { searchParams: any }) {
  let filter = searchParams.capacity;
  return (
    <div className="relative">
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex items-center justify-end mb-3 w-full">
        <Filter filter={filter} />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinData filter={filter} />
      </Suspense>

      <ReservationReminder />
    </div>
  );
}

export default Page;
