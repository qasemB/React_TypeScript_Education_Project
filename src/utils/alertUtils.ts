import Swal, { SweetAlertIcon } from "sweetalert2";

export const successAlertModal = (text: string = "", title: string = "عملیات موفق", icon: SweetAlertIcon = "success") => {
    return Swal.fire({
      // position,
      icon,
      text,
      title,
      showConfirmButton: true,
      // timer: 3000,
      backdrop: true,
    });
  };
  export const errorAlertModal = (text: string = "", title: string = "عملیات موفق", icon: SweetAlertIcon = "error") => {
    return Swal.fire({
      // position,
      icon,
      text,
      title,
      showConfirmButton: true,
      // timer: 3000,
      backdrop: true,
    });
  };
  
  export const confirmAlert = (
    title = "آیا مطمئن هستید",
    text = "",
    icon: SweetAlertIcon = "warning",
    confirmButtonColor = "#FF5555",
    confirmButtonText = "تایید"
  ) => {
    return Swal.fire({
      icon,
      title,
      text,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText: `انصراف`,
      confirmButtonColor,
      cancelButtonColor: "gray",
    });
  };