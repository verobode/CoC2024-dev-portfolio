// index.js

// Limpiar el formulario
function cleanForm() {
  document.getElementById("inputEmail1").value = "";
  document.getElementById("inputPassword1").value = "";
}

// Función para mostrar mensajes
function messageForm(message, className = "alert-danger") {
  const messageContainer = document.getElementById("mensajevista");
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert", className);
  alertDiv.setAttribute("role", "alert");
  alertDiv.textContent = message;
  messageContainer.appendChild(alertDiv);

  cleanForm();

  setTimeout(() => {
    messageContainer.removeChild(alertDiv);
  }, 4000);
}

// Formulario
async function submitForm() {
  const email = document.getElementById("inputEmail1").value;
  const password = document.getElementById("inputPassword1").value;

  // Validar campos vacíos
  if (email.trim() === "" || password.trim() === "") {
    messageForm("Por favor, complete todos los campos");
    return;
  }

  // Validar formato del email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageForm(
      "Por favor, ingrese una dirección de correo electrónico válida"
    );
    return;
  }

  // Validar la contraseña
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    messageForm(
      "La contraseña debe contener un mínimo de 8 caracteres, al menos una letra y un número"
    );
    return;
  }

  document.getElementById("successAlert").style.display = "block";
}

// Efecto de tipeo
function textoTipeo(elementId, text, speed) {
  let index = 0;
  const element = document.getElementById(elementId);

  function type() {
    element.textContent += text[index];
    index++;
    if (index < text.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(function () {
        index = 0;
        element.textContent = "";
        type();
      }, 2000);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", function () {
  textoTipeo("textoTipeo", "Web Developer ", 200);
});


fetch("https://dolarapi.com/v1/dolares/oficial")
  .then((response) => response.json())
  .then((data) => {
    const compra = data.compra;
    const venta = data.venta;
    const fecha = data.fecha;

    const compraElement = document.getElementById("compra");
    compraElement.textContent = `Valor de compra: $${compra}`;

    const ventaElement = document.getElementById("venta");
    ventaElement.textContent = `Valor de venta: $${venta}`;

    const currentDate = new Date();

    const fechaElemento = document.getElementById("fecha");

    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    fechaElemento.textContent = `Fecha: ${formattedDate}`;
  })

  .catch((error) => {
    // Si la API falla
    console.error("Error al obtener el tipo de cambio:", error);
  });


