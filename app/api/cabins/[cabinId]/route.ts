import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: { params: any }) {
  const { cabinId } = params;
  console.log(cabinId);
  try {
    let [cabins, bookedDatesOfCabin] = await Promise.all([
      getCabin(Number(cabinId)),
      getBookedDatesByCabinId(Number(cabinId)),
    ]);
    return NextResponse.json({ message: "Done", cabins, bookedDatesOfCabin });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errMsg: "Cabin is not found" });
  }
}
