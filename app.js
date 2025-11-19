// Inicializa EmailJS con tu Public Key
emailjs.init("Mij2hxi74IOrpJ8KQ"); // Public Key

// Escucha el envío del formulario
document.getElementById('personalDataForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recargar la página

  // Captura de datos
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Enviar correo con EmailJS
  emailjs.send("service_a3697qc", "template_z6xjm5i", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  })
  .then(() => {
    document.getElementById('status-message').innerText = "¡Datos enviados con éxito!";
    document.getElementById('personalDataForm').reset();
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
    document.getElementById('status-message').innerText = "Hubo un error al enviar los datos. Intenta de nuevo.";
  });
});
