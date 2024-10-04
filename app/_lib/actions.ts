"use server";

import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

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
}
