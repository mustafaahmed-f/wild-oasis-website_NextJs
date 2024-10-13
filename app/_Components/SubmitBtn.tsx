import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitBtnProps {
  range: any;
}

function SubmitBtn({ range }: SubmitBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || !range.from || !range.to}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "reserving ..." : "Reserve now"}
    </button>
  );
}

export default SubmitBtn;
