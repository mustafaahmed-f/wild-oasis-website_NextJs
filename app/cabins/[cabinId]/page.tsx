import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getCabins } from "@/app/_lib/data-service";
import TextExpander from "@/app/_Components/TextExpander";
import ReservationSection from "@/app/_Components/ReservationSection";
import { Suspense } from "react";
import Spinner from "@/app/_Components/Spinner";
import Cabin from "@/app/_Components/Cabin";

export const revalidate = 8900;

// PLACEHOLDER DATA
export async function generateMetadata({ params }: { params: any }) {
  const { name, id } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  // console.log(cabins);
  const ids = cabins?.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  // console.log(ids);
  return ids;
}

export default async function Page({ params }: { params: any }) {
  const cabin = await getCabin(params.cabinId);

  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve {name} today. Pay on arrival.
        </h2>
      </div>

      <Suspense fallback={<Spinner />}>
        <ReservationSection cabin={cabin} />
      </Suspense>
    </div>
  );
}
