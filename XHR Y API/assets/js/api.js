// Realizar una solicitud con fetch
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Procesar los datos
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
