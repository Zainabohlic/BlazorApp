window.updateModal = {
    show: function () {
        var modalElement = document.getElementById('updateModal');
        var modal = new bootstrap.Modal(modalElement);
        modal.show();
    },
    hide: function () {
        var modalElement = document.getElementById('updateModal');
        var modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    }
};
