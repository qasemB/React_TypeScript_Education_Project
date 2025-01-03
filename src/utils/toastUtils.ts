import { toast, TypeOptions } from "react-toastify";

export const showToast = (
  text: string,
  icon: TypeOptions = "info",
  autoClose?: number | false
) => {
  return toast(text, {
    closeOnClick: true,
    autoClose,
    type: icon,
    rtl: true,
  });
};

export const errorToast = (text = "عملیات ناموفق") => {
  return showToast(text, "error");
};

export const successToast = (text = "عملیات موفق") => {
  return showToast(text, "success");
};
