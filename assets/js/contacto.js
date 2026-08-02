/**
 * contacto.js
 * ---------------------------------------------------------------------
 * Hace funcional el formulario de "Contáctanos" sin backend ni librerías:
 * arma un enlace mailto: con el nombre, correo y mensaje que la persona
 * escribió, y le pide al navegador que lo abra. Esto dispara la
 * aplicación de correo que el usuario tenga configurada (Gmail, Outlook,
 * Apple Mail, etc.) con el mensaje ya redactado, listo para enviar.
 *
 * No se envía nada "en automático" desde el servidor: es el propio
 * usuario quien, dentro de su aplicación de correo, confirma el envío.
 * Es la forma más simple de tener un formulario de contacto funcional
 * en un sitio 100% estático.
 * ---------------------------------------------------------------------
 */
(function () {
  "use strict";

  var CORREO_DESTINO = "webmaster@istpargentina.edu.pe";

  function manejarEnvio(evento) {
    evento.preventDefault();

    var form = evento.target;
    var nombre = form.nombre.value.trim();
    var correo = form.correo.value.trim();
    var mensaje = form.mensaje.value.trim();
    var feedback = document.getElementById("contacto-feedback");

    if (!nombre || !correo || !mensaje) {
      if (feedback) {
        feedback.textContent = "Completa todos los campos antes de enviar.";
        feedback.className = "small mb-2 text-danger";
      }
      return;
    }

    var asunto = "Consulta desde el sitio web - " + nombre;
    var cuerpo =
      "Nombre: " + nombre + "\n" +
      "Correo de contacto: " + correo + "\n\n" +
      "Mensaje:\n" + mensaje;

    var enlaceMailto =
      "mailto:" + CORREO_DESTINO +
      "?subject=" + encodeURIComponent(asunto) +
      "&body=" + encodeURIComponent(cuerpo);

    window.location.href = enlaceMailto;

    if (feedback) {
      feedback.textContent = "Se abrió tu aplicación de correo con el mensaje ya redactado. Solo falta que le des enviar.";
      feedback.className = "small mb-2 text-info";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("form-contacto");
    if (formulario) {
      formulario.addEventListener("submit", manejarEnvio);
    }
  });
})();
