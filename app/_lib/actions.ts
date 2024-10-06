"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData: any) {
  const session = await auth();
  if (!session) throw new Error("You are not authorized !!");

  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalID: string = formData.get("nationalID");

  const updatedFields = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId: string) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in !");

  //// Here we want to allow the user to only delete his bookings only:
  const bookings = await getBookings(Number(session?.user?.guestId));
  const bookingsIDs = bookings.map((booking) => booking.guestID);
  if (!bookingsIDs.includes(bookingId))
    throw new Error("Only allowed to delete your bookings !!");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", Number(bookingId));

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}
