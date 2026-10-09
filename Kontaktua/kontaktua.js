const WEBHOOK_URL = 'https://hook.eu1.make.com/zf6vmsgn5859ml3nstae4dg03i6tcfss';
const formulario = document.querySelector('#formulario-contacto');
const estadoFormulario = document.querySelector('#estado-formulario');

if (formulario && estadoFormulario) {
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const botonEnviar = formulario.querySelector('button[type="submit"]');
    const datosFormulario = new FormData(formulario);
    const datos = Object.fromEntries(datosFormulario.entries());

    estadoFormulario.textContent = 'Enviando el mensaje...';
    estadoFormulario.className = 'estado-formulario';
    botonEnviar.disabled = true;

    try {
      const respuesta = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (!respuesta.ok) {
        throw new Error(`El webhook ha respondido con el estado ${respuesta.status}.`);
      }

      formulario.reset();
      estadoFormulario.textContent = 'Mensaje enviado correctamente. Gracias por contactar con nosotros.';
      estadoFormulario.className = 'estado-formulario exito';
    } catch (error) {
      console.error('No se ha podido enviar el formulario:', error);
      estadoFormulario.textContent = 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.';
      estadoFormulario.className = 'estado-formulario error';
    } finally {
      botonEnviar.disabled = false;
    }
  });
}