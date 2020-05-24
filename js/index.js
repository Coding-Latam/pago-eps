function showSuccesModal() {
  Swal.fire({
    title: "Transaccion finalizada!",
    text: "El pago se realizo satisfactoriamente",
    icon: "success",
    confirmButtonText: "Ok",
  });
}

function showErrorModal() {
  Swal.fire({
    title: "Transaccion fallida!",
    text: "El pago no se realizo",
    icon: "error",
    confirmButtonText: "Ok",
  });
}
