import React from "react";
import DateSelector from "@/app/_Components/DateSelector";
import ReservationForm from "./ReservationForm";
import ReservationReminder from "./ReservationReminder";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

// export const revalidate = 0;
interface ReservationSectionProps {
  cabin: any;
}

async function ReservationSection({ cabin }: ReservationSectionProps) {
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(Number(cabinId));
  const { id } = cabin;

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(id),
  ]);

  // console.log(settings);
  // console.log(bookedDates);
  return (
    <div className="flex flex-col gap-4 items-center my-8 relative">
      <div className="grid max-md:grid-rows-2 md:grid-cols-2 border border-primary-900">
        <DateSelector
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
        <ReservationForm cabin={cabin} />
      </div>
    </div>
  );
}

export default ReservationSection;
