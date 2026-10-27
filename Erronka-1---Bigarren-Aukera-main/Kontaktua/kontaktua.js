const WEBHOOK_URL = 'https://hook.eu1.make.com/zf6vmsgn5859ml3nstae4dg03i6tcfss';
const formulario = document.querySelector('#formulario-contacto');
const estadoFormulario = document.querySelector('#estado-formulario');

if (formulario && estadoFormulario) {
  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const botonEnviar = formulario.querySelector('button[type="submit"]');
    const datosFormulario = new FormData(formulario);
    const datos = Object.fromEntries(datosFormulario.entries());

    estadoFormulario.textContent = 'Mezua bidaltzen...';
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
        throw new Error(`Webhook-ak ${respuesta.status} egoerarekin erantzun du.`);
      }

      formulario.reset();
      estadoFormulario.textContent = 'Mezua behar bezala bidali da. Eskerrik asko gurekin harremanetan jartzeagatik.';
      estadoFormulario.className = 'estado-formulario exito';
    } catch (error) {
      console.error('Ezin izan da formularioa bidali:', error);
      estadoFormulario.textContent = 'Ezin izan da mezua bidali. Saiatu berriro geroago.';
      estadoFormulario.className = 'estado-formulario error';
    } finally {
      botonEnviar.disabled = false;
    }
  });
}
