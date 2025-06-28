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
