"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

interface DeleteReservationProps {
  bookingId: number;
  onDelete: (id: number) => {};
}

const DeleteReservation: React.FC<DeleteReservationProps> = ({
  bookingId,
  onDelete,
}) => {
  const { 0: isPending, 1: startTransition } = useTransition();

  function handleDeletion() {
    if (confirm("Are you sure that you want to delete reservation ?")) {
      startTransition(() => {
        return new Promise((res) => {
          onDelete(bookingId);
          res();
        });
      });
    }
  }

  return (
    <button
      onClick={handleDeletion}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
};

export default DeleteReservation;
