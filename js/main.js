document.addEventListener("DOMContentLoaded", function () {
    const paquetes = document.querySelectorAll('.paquete');

    paquetes.forEach(paquete => {
        paquete.addEventListener('click', function () {
            // Opcional: cerrar otros paquetes
            paquetes.forEach(p => {
                if (p !== this) p.classList.remove('active');
            });

            // Alternar este paquete
            this.classList.toggle('active');
        });
    });
});
