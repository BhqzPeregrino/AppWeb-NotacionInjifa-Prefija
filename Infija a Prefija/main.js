import { ConvertidorInfijoAPrefijo } from './ConvertidorInfijoAPrefijo.js';

function convertirAPrefijo() {
    const expresionInfija = document.getElementById("expresionInfija").value;
    const convertidor = new ConvertidorInfijoAPrefijo();
    const expresionPrefija = convertidor.infijoAPrefijo(expresionInfija);
    document.getElementById("resultadoPrefijo").textContent = expresionPrefija;
}

document.getElementById("botonConvertir").addEventListener("click", convertirAPrefijo);
