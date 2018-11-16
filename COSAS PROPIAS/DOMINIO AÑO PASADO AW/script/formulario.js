function valoracion_oculta (valoracion) {
    var div_oculto = document.getElementById("div_oculto");
    div_oculto.style.display = valoracion.checked ? "block" : "none";
}
