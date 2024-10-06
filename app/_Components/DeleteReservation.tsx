"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { deleteReservation } from "../_lib/actions";

interface DeleteReservationProps {
  bookingId: string;
}

const DeleteReservation: React.FC<DeleteReservationProps> = ({ bookingId }) => {
  return (
    <button
      onClick={() => deleteReservation(bookingId)}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
};

export default DeleteReservation;
