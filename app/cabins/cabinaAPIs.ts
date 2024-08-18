import supabase from "../_lib/supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to get cabins");
  }

  return data;
}
