import { ComponentProps } from "react";
import { ImSpinner } from "react-icons/im";

const AppButton = ({ title, className,isLoading, ...rest }: ComponentProps<"button"> & {isLoading?: boolean}) => {
  return (
    <button
      {...rest}
      className={`text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full flex justify-center ${className}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ImSpinner size={24} className="animate-spin"/>
      ) : (title || "ثبت")}
    </button>
  );
};

export default AppButton;
