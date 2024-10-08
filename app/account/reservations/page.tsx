import ReservationCard from "@/app/_Components/ReservationCard";
import ReservationList from "@/app/_Components/ReservationList";
import { deleteReservation } from "@/app/_lib/actions";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

import Link from "next/link";
import React, { useEffect, useOptimistic } from "react";

export const revalidate = 1000 * 60 * 60 * 24;

async function Reservations({}) {
  const session = await auth();
  const bookings: any[] = await getBookings(Number(session?.user.guestId));

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      <ReservationList bookings={bookings} />
    </div>
  );
}

export default Reservations;
