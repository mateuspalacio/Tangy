window.ShowToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message, "Operation Successful", { timeOut: 5000 });
    }
    if (type === "error") {
        toastr.error(message, "Operation Failed", { timeOut: 5000 });
    }
}
// blazored has toastr
window.ShowSwal = (type, message) => {
    if (type === "success") {
        Swal.fire(
            'success notificatiob!',
            message,
            'success'
        )
    }
    if (type === "error") {
        Swal.fire(
            'success notificatiob!',
            message,
            'error'
        )
    }
}

function ShowDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('show');
}

function HideDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('hide');
}