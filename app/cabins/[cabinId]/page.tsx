import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getCabins } from "@/app/_lib/data-service";
import TextExpander from "@/app/_Components/TextExpander";

// export const revalidate = 0;

// PLACEHOLDER DATA
export async function generateMetadata({ params }: { params: any }) {
  const { name } = await getCabin(params.cabinId);

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
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    await getCabin(params.cabinId);

  // console.log(description);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[auto] sm:grid-rows-[auto] grid-rows-[auto_1fr] sm:grid-cols-[3fr_4fr] sm:gap-10 md:gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1] -translate-x-3">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-3xl max-sm:text-center sm:text-4xl md:text-7xl mb-5 sm:translate-x-[-254px] bg-primary-950 p-6 pb-1 max-sm:w-full w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve {name} today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
