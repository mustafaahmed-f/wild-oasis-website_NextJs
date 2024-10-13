"use client";

import Image from "next/image";
import { useReservation } from "../_context/ReservationContext";
import { differenceInDays } from "date-fns";
import { createReservation } from "../_lib/actions";
import SubmitBtn from "./SubmitBtn";

function ReservationForm({ cabin, user }: { cabin: any; user: any }) {
  console.log(cabin);

  const { maxCapacity } = cabin;
  const { range, resetRange } = useReservation();
  const numNights = differenceInDays(range.to, range.from);
  console.log(numNights);
  const { regularPrice, discount } = cabin;
  const cabinPrice = numNights * (regularPrice - discount);
  const extraPrice = 0;
  const totalPrice = cabinPrice + extraPrice;
  const status = "unconfirmed";
  const hasBreakfast = false;
  const isPaid = false;

  const reservationData = {
    startDate: range.from,
    endDate: range.to,
    cabinPrice,
    extraPrice,
    totalPrice,
    isPaid,
    hasBreakfast,
    status,
    cabinId: cabin.id,
    guestId: user.guestId,
    numNights,
  };

  const handleCreateReservation = createReservation.bind(null, reservationData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <Image
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user?.image}
            alt={user?.name}
            width={30}
            height={27}
          />
          <p>{user?.name}</p>
        </div>
      </div>

      <form
        action={(formData: any) => {
          if (!range.from || !range.to) return;
          handleCreateReservation(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <SubmitBtn range={range} />
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
