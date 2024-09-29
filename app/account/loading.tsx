import React from "react";
import Spinner from "@/app/_Components/Spinner";

interface LoaderProps {}

const Loading: React.FC<LoaderProps> = ({}) => {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
