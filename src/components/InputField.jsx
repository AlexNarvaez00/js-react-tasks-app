import { useId } from "react";
import LabelInput from "./LabelInput";

const InputField = ({ className, type = "text", label, ...props }) => {
  const id = useId();

  return (
    <>
      {label && <LabelInput htmlFor={id}>{label}</LabelInput>}
      <input
        className={`flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 focus:border-[#6025F5] text-[#6025F5] ${className}`}
        type={type}
        {...props}
        id={id}
      />
    </>
  );
};
export default InputField;
