function calculateField() {
    const k = 8.99 * Math.pow(10, 9);
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const d = parseFloat(document.getElementById('d').value);
    const e = k * ((q1 * q2) / Math.pow(d, 2));
    document.getElementById("resultado").innerHTML = "El campo eléctrico total es " + e.toFixed(3) + " N/C";
}