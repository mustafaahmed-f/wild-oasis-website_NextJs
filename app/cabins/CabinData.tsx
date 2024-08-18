"use client";
import React, { useEffect } from "react";
import { getCabins } from "./cabinaAPIs";
import Image from "next/image";
interface CabinDataProps {}

const CabinData: React.FC<CabinDataProps> = ({}) => {
  useEffect(() => {
    getCabins()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Image
        alt="cabin-1"
        src="https://btxtvhxbwjxbtxrxceii.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg?t=2024-08-16T21%3A50%3A53.853Z"
        width={100}
        height={100}
      />
    </div>
  );
};

export default CabinData;
