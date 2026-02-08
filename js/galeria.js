window.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");

    var imGs = document.querySelectorAll(".myImg");

    imGs.forEach(function (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    
    var closeBtn = document.querySelector('.cerrar');
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) modal.style.display = "none";
    };

});