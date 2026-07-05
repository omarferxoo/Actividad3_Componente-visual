class TareasDesplegables {
  constructor(selector, tareas) {
    this.contenedor = document.querySelector(selector);
    this.tareas = tareas;
    this.filtro = '';
    this.limite = 3;
    this.mostrar();
  }

  mostrar() {
    this.contenedor.innerHTML = '';
    const lista = this.tareas.filter((tarea) =>
      tarea.titulo.toLowerCase().includes(this.filtro)
    );

    lista.slice(0, this.limite).forEach((tarea) => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'tarea';

      tarjeta.innerHTML = `
        <button class="tarea-titulo" type="button">
          <span>${tarea.titulo}</span>
          <b>+</b>
        </button>
        <p class="tarea-texto">${tarea.descripcion}</p>
      `;

      const boton = tarjeta.querySelector('.tarea-titulo');
      boton.addEventListener('click', () => {
        tarjeta.classList.toggle('abierta');
      });

      this.contenedor.appendChild(tarjeta);
    });

    if (lista.length === 0) {
      this.contenedor.innerHTML = '<p class="vacio">No se encontro esa tarea.</p>';
    }
  }

  agregar(titulo, descripcion) {
    if (titulo.trim() === '' || descripcion.trim() === '') {
      alert('Completa el titulo y la descripcion.');
      return;
    }

    this.tareas.unshift({ titulo, descripcion });
    this.limite = 3;
    this.filtro = '';
    this.mostrar();
  }

  buscar(texto) {
    this.filtro = texto.toLowerCase();
    this.limite = 3;
    this.mostrar();
  }

  mostrarMas() {
    this.limite += 3;
    this.mostrar();
  }
}
