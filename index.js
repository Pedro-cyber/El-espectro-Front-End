function mostrar() {
    document.getElementById("sidebar").style.height = "200px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}
document.getElementById("open").addEventListener("click", mostrar, false);

function ocultar() {
    document.getElementById("sidebar").style.height = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

document.getElementById("close").addEventListener("click", ocultar, false);

