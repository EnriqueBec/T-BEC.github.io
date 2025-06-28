document.addEventListener("DOMContentLoaded", function () {
    const paquetes = document.querySelectorAll(".paquete");

    paquetes.forEach(paquete => {
        paquete.addEventListener("click", () => {
            paquete.classList.toggle("activo");
        });
    });
});
