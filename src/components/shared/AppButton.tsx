import { ComponentProps } from "react";

const AppButton = ({ title, className, ...rest }: ComponentProps<"button">) => {
  return (
    <button
      {...rest}
      className={`text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full ${className}`}
    >
      {title || "ثبت"}
    </button>
  );
};

export default AppButton;
