import React from "react";
import Spinner from "@/app/_Components/Spinner";

interface LoaderProps {}

const Loading: React.FC<LoaderProps> = ({}) => {
  return <Spinner />;
};

export default Loading;
