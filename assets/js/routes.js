(function () {
  "use strict";

  var enSubcarpetaPages = window.location.pathname.indexOf("/pages/") !== -1;
  var BASE = enSubcarpetaPages ? "../" : "./";

  var ROUTES = {
    logo: BASE + "assets/images/logo-instituto.png",
    logoBlanco: BASE + "assets/images/logo-instituto-blanco.png",
    carrusel1: BASE + "assets/images/carrusel/img-1.jpg",
    carrusel2: BASE + "assets/images/carrusel/img-2.jpg",
    carrusel3: BASE + "assets/images/carrusel/img-3.jpg",
    pdfFundamentos: BASE + "assets/docs/Fundamentos-IW.pdf",

    home: BASE + "index.html",
    aprendizajeAutomatico: BASE + "pages/aprendizaje-automatico.html",
    redNeuronal: BASE + "pages/red-neur.html",
    contacto: BASE + "pages/contact.html",
    procesamientoLenguaje: BASE + "pages/proc-len-nat.html",
    visionComputadora: BASE + "pages/vis-comp.html",
    libreriaIA: BASE + "pages/libreria-ia.html",
    proyectosInnovacion: BASE + "pages/proy-innov.html",
    mallaCurricular: BASE + "pages/malla-curr.html",
    masOpciones: BASE + "pages/mas.html",
  };

  function aplicarRutas() {
    var elementos = document.querySelectorAll("[data-route]");

    elementos.forEach(function (el) {
      var clave = el.getAttribute("data-route");
      var ruta = ROUTES[clave];

      if (!ruta) {
        console.warn('routes.js: no existe la ruta "' + clave + '"');
        return;
      }

      if (el.tagName === "IMG") {
        el.src = ruta;
      } else if (el.tagName === "A" || el.tagName === "LINK") {
        el.href = ruta;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", aplicarRutas);

  window.ROUTES = ROUTES;
})();
