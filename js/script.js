document.getElementById('guardar').addEventListener('click', function () {
    const sistolica = document.getElementById('sistolica').value;
    const distolica = document.getElementById('distolica').value;
    const pxm = document.getElementById('pxm').value;
    const fecha = document.getElementById('fecha').value;
    const observaciones = document.getElementById('observaciones').value;

    if (!sistolica || !distolica || !pxm || !fecha || !observaciones) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const newRegis = { sistolica, distolica, pxm, fecha, observaciones };
    const saveRegis = JSON.parse(localStorage.getItem('sgRegis')) || [];

    saveRegis.push(newRegis);
    localStorage.setItem('sgRegis', JSON.stringify(saveRegis));
    alert('Registro de signos vitales guardado');
});

document.getElementById('guardar_glicemia').addEventListener('click', function () {
    const glicemia = document.getElementById('glicemia').value;
    const fecha_glicosa = document.getElementById('fecha_glicosa').value;
    const observaciones_glicosa = document.getElementById('observaciones_glicosa').value;

    if (!glicemia || !fecha_glicosa || !observaciones_glicosa) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const newRegisglicemia = { glicemia, fecha_glicosa, observaciones_glicosa };
    const saveRegistglicemia = JSON.parse(localStorage.getItem('glicosaRegis')) || [];

    saveRegistglicemia.push(newRegisglicemia);
    localStorage.setItem('glicosaRegis', JSON.stringify(saveRegistglicemia));
    alert('Registro de glicemia guardado');
});
