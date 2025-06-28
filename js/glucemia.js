document.getElementById('guardar_glicemia').addEventListener('click', function () {
    const glicemia = document.getElementById('glicemia').value;
    const fecha_glicosa = document.getElementById('fecha_glicosa').value;
    const observaciones_glicosa = document.getElementById('observaciones_glicosa').value;

    if (!glicemia || !fecha_glicosa || !observaciones_glicosa) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const newRegisglicemia = { glicemia, fecha_glicosa, observaciones_glicosa };
    const saveRegisglicemia = JSON.parse(localStorage.getItem('glicosaRegis')) || [];

    saveRegisglicemia.push(newRegisglicemia);
    localStorage.setItem('glicosaRegis', JSON.stringify(saveRegisglicemia));
    alert('Registro de glicemia guardado');
});