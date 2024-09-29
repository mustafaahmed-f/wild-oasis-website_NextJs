import React from "react";
import DateSelector from "@/app/_Components/DateSelector";
import ReservationForm from "./ReservationForm";
import ReservationReminder from "./ReservationReminder";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

// export const revalidate = 0;
interface ReservationSectionProps {
  cabin: any;
}

async function ReservationSection({ cabin }: ReservationSectionProps) {
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(Number(cabinId));
  const { id } = cabin;
  const sessions = await auth();

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
        {sessions?.user ? (
          <ReservationForm cabin={cabin} user={sessions?.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}

export default ReservationSection;
