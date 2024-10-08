"use client";

import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";
import Link from "next/link";

interface ReservationListProps {
  bookings: any;
}

function ReservationList({ bookings }: ReservationListProps) {
  const [optimisticBookings, deleteOptimistic] = useOptimistic(
    bookings,
    (currentState: any, deleteId) => {
      return currentState.filter((booking: any) => booking.id !== deleteId);
    }
  );

  async function handleDeleteReservation(id: number) {
    deleteOptimistic(id);
    await deleteReservation(id);
  }

  return bookings.length === 0 ? (
    <p className="text-lg">
      You have no reservations yet. Check out our{" "}
      <Link className="underline text-accent-500" href="/cabins">
        luxury cabins &rarr;
      </Link>
    </p>
  ) : (
    <ul className="space-y-6">
      {optimisticBookings.map((booking: any) => (
        <ReservationCard
          onDelete={handleDeleteReservation}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
