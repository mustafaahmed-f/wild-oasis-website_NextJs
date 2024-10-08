import UpdateReservationBtn from "@/app/_Components/UpdateReservationBtn";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export const revalidate = 0;

export default async function Page({ params }: { params: any }) {
  const booking = await getBooking(Number(params.bookingId));
  const cabin = await getCabin(booking.cabinId);

  // CHANGE
  const { bookingId } = params;
  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateReservation}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input hidden value={Number(params.bookingId)} name="id" readOnly />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
            defaultValue={booking.numGuests}
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
            defaultValue={booking.observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <UpdateReservationBtn />
      </form>
    </div>
  );
}
