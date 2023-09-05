document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formRegistro");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNac").value;

        const data = {
            nombre,
            apellido,
            fechaNacimiento,
        };

        enviarFormulario(data)
            .then((response) => {
                console.log("Respuesta del servidor:", response);
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
            });
    });

    async function enviarFormulario (data) {
        try {
            // Realizar una solicitud HTTP POST utilizando fetch
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            // Verificar si la respuesta del servidor es exitosa
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }
            // Parsear la respuesta JSON del servidor
            return await response.json();
        } catch (error) {
            // Capturar cualquier error que pueda ocurrir durante el proceso
            throw error;
        }
    }
});
