// Crear una nueva instancia de XMLHttpRequest
let xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('GET', 'https://api.example.com/data', true);

// Definir lo que sucederá cuando la solicitud cambie de estado
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // 4 significa que la solicitud está completa
        if (xhr.status === 200) { // 200 significa éxito
            // Parsear y procesar la respuesta
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            // Procesar los datos
            document.getElementById('output').innerText = JSON.stringify(response, null, 2);
        } else {
            console.error('Error en la solicitud: ' + xhr.status);
        }
    }
};

// Enviar la solicitud
xhr.send();
