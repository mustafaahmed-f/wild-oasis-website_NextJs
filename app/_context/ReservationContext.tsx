"use client";

import { ReactNode, useContext, createContext, useState } from "react";
import { DateRange } from "react-day-picker";

let reservationContext = createContext({} as any);

let initial = {
  from: undefined,
  to: undefined,
};
export default function ReservationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [range, setRange] = useState<DateRange | undefined>(initial);

  function resetRange() {
    setRange(initial);
  }

  let value = { range, setRange, resetRange };

  return (
    <reservationContext.Provider value={value}>
      {children}
    </reservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(reservationContext);
  if (context === undefined)
    throw new Error("Context should be used inside reservation provider");

  return context;
}
