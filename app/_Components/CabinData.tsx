import React from "react";
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_Components/CabinCard";

interface CabinDataProps {}

async function CabinData({}) {
  const cabins: any[] = await getCabins();
  return cabins.length > 0 ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin: any) => (
        <CabinCard cabin={cabin!} key={cabin.id} />
      ))}
    </div>
  ) : null;
}

export default CabinData;
