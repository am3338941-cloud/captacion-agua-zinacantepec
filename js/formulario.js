function validarFormulario() {
    const form = document.getElementById("form");
    let errores = false;

    document.querySelectorAll(".error-msg").forEach(el => el.remove());
    document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error"));

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const descripcion = form.desc.value.trim();

    if (!nombre) {
        mostrarError(form.nombre, "El nombre es obligatorio.");
        errores = true;
    }
    if (!correo) {
        mostrarError(form.correo, "El correo es obligatorio.");
        errores = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        mostrarError(form.correo, "Correo inválido.");
        errores = true;
    }
    if (!descripcion) {
        mostrarError(form.desc, "La descripción es obligatoria.");
        errores = true;
    }
    if (!errores) {
        form.submit();
    }
}
function mostrarError(campo, mensaje) {
    campo.classList.add("error");
    const div = document.createElement("div");
    div.className = "error-msg";
    div.textContent = mensaje;
    campo.after(div);
}
document.getElementById("botonEnviar").addEventListener("click", validarFormulario);
