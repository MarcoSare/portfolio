import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AlertMessage = async ({ icon = "success", title, text }) => {
  const MySwal = withReactContent(Swal);
  await MySwal.fire({
    icon: icon,
    title: title,
    text: text,
    customClass: {
      popup: "border-radius-2",
    },
  });
  return;
};
const AlertConfirm = ({ icon = "warning", title, text }) => {
  const MySwal = withReactContent(Swal);
  const result = MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    customClass: {
      popup: "border-radius-2",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
  return result;
};

const AlertPositioned = async ({
  position = "top-end",
  icon = "success",
  title,
  text,
}) => {
  const MySwal = withReactContent(Swal);
  const Toast = MySwal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: "alert",
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });
  await Toast.fire({
    icon: icon,
    title: title,
    text: text,
  });
  return;
};
/*

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', MySwal.stopTimer)
      toast.addEventListener('mouseleave', MySwal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: icon,
    title: title
  })

*/

export { AlertMessage, AlertConfirm, AlertPositioned };
