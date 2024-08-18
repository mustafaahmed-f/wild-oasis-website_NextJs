import React, { useEffect } from "react";
import CabinData from "./CabinData";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  let dataArr: any[] = await data.slice(0, 11);

  return (
    <>
      <CabinData />
      <ul className="flex flex-col list-disc">
        {dataArr?.map((el: any) => (
          <li key={el.id}>{el.title as string}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
