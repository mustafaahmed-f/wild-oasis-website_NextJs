import React from "react";
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_Components/CabinCard";

interface CabinDataProps {
  filter: string;
}

async function CabinData({ filter }: CabinDataProps) {
  const cabins: any[] = await getCabins();
  let dispalyedCabins: any[] = [];
  // if (!filter) dispalyedCabins = cabins;
  let receivedFilter: string = filter ?? "all";
  switch (receivedFilter) {
    case "all":
      dispalyedCabins = cabins;

      break;

    case "small":
      dispalyedCabins = cabins.filter((cabin) => cabin.maxCapacity < 3);

      break;

    case "medium":
      dispalyedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity < 8
      );

      break;

    case "large":
      dispalyedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

      break;

    default:
      break;
  }

  return cabins.length > 0 ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {dispalyedCabins?.map((cabin: any) => (
        <CabinCard cabin={cabin!} key={cabin.id} />
      ))}
    </div>
  ) : null;
}

export default CabinData;
