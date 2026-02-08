document.addEventListener('DOMContentLoaded', function () {
    var letras = ['name', 'cognom'];

    letras.forEach(function (id) {
        const input = document.getElementById(id);
        input.addEventListener('input', function (e) {
            e.target.value = e.target.value.toUpperCase();
        });

    })
});