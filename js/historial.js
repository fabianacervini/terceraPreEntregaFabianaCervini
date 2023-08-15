document.addEventListener('DOMContentLoaded', function () {
  const listaPrestamos = document.querySelector('.lista-prestamos');

  // Función para cargar y mostrar el historial de préstamos
  async function cargarHistorial() {
    // Limpiar la lista de préstamos
    listaPrestamos.innerHTML = '';

    try {
      // Obtener el historial de préstamos desde el servidor utilizando fetch
      const response = await fetch('URL_DEL_ENDPOINT_DEL_HISTORIAL');
      const historial = await response.json();

      // Recorrer el historial y crear elementos de lista para cada préstamo
      historial.forEach((prestamo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Préstamo ${index + 1}: Monto: $${prestamo.montoPrestamo}, Plazo: ${prestamo.plazoPrestamo} meses, Tasa: ${prestamo.tasaInteres * 100}%, Cuota: $${prestamo.pagoMensual}`;
        listaPrestamos.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error al cargar el historial:', error);
    }
  }

  // Cargar y mostrar el historial al cargar la página
  cargarHistorial();
});

ocument.addEventListener('DOMContentLoaded', function () {
  const listaPrestamos = document.querySelector('.lista-prestamos');

  // Simulación de datos de historial (comenta esta sección si el fetch funciona)
  const datosPrestamoSimulados = [
    { montoPrestamo: 1000, plazoPrestamo: 12, tasaInteres: 0.05, pagoMensual: 100 },
    { montoPrestamo: 2000, plazoPrestamo: 24, tasaInteres: 0.08, pagoMensual: 150 },
    // Agrega más datos simulados si es necesario
  ];

  // Recorrer el historial y crear elementos de lista para cada préstamo
  datosPrestamoSimulados.forEach((prestamo, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Préstamo ${index + 1}: Monto: $${prestamo.montoPrestamo}, Plazo: ${prestamo.plazoPrestamo} meses, Tasa: ${prestamo.tasaInteres * 100}%, Cuota: $${prestamo.pagoMensual}`;
    listaPrestamos.appendChild(listItem);
  });
});