
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.shiftKey && event.code === 'KeyQ') {
            event.preventDefault();
            event.stopPropagation();
            window.location.href = 'contacte.html';
        }
    });
});

