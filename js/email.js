function loaderOn() {
    document.getElementById("preloader").style.display = "block";
    document.getElementById("status").style.display = "block";
  }
  
  
  function loaderOff () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("status").style.display = "none"
  }

  function inputVacios () {
    document.getElementById("from_name").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  }
  
  
  
  function mostrarNotificacionPositiva() {
    Swal.fire({
        title: 'Enviado satisfactoriamente',
        text: 'Responderé en el menor tiempo posible, gracias ' + document.getElementById("from_name").value + '.',
        icon: 'success', // Puedes usar 'success', 'error', 'warning' o 'info'
        confirmButtonText: 'Aceptar'
    });
  }
  
  function mostrarNotificacionNegativa() {
    Swal.fire({
        title: 'Error',
        text: 'Espera un momento para reintentarlo, lo sentimos mucho '  + document.getElementById("from_name").value + '.',
        icon: 'error', // Puedes usar 'success', 'error', 'warning' o 'info'
        confirmButtonText: 'Cerrar'
    });
  }
  
  
  
  document.getElementById('contact-form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     loaderOn();
  
     const serviceID = 'service_11rvcpw';
     const templateID = 'template_0rb3yfd';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        loaderOff ();
        mostrarNotificacionPositiva();
        inputVacios ();
        document.getElementById("success").style.display = "block";

      }, (err) => {
        loaderOff ();
        mostrarNotificacionNegativa();
        document.getElementById("error").style.display = "block";

      });
  });
  