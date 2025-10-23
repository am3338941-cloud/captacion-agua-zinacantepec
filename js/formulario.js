
function mostrarError(campo, mensaje) {
  campo.classList.add("error");
  let div = campo.parentNode.querySelector('.error-msg');
  if (!div) {
    div = document.createElement('div');
    div.className = 'error-msg';
    campo.after(div);
  }
  div.textContent = mensaje;
}

function validarFormulario(e) {
  if (e) e.preventDefault();
  const form = document.getElementById('form');
  if (!form) return;
  [...form.querySelectorAll('.error-msg')].forEach(el => el.remove());
  [...form.querySelectorAll('input, textarea')].forEach(el => el.classList.remove('error'));

  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const descripcion = form.desc.value.trim();

  let errores = false;
  if (!nombre) { mostrarError(form.nombre, "El nombre es obligatorio."); errores = true; }
  if (!correo) { mostrarError(form.correo, "El correo es obligatorio."); errores = true; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) { mostrarError(form.correo, "Correo inválido."); errores = true; }
  if (!descripcion) { mostrarError(form.desc, "La descripción es obligatoria."); errores = true; }

  if (!errores) {
    alert('Mensaje enviado. Gracias por contactarnos.');
    form.reset();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  if (form) form.addEventListener('submit', validarFormulario);
  document.getElementById('botonEnviar')?.addEventListener('click', validarFormulario);
});
