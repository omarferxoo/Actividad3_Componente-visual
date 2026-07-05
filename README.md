<div align="center">

TECNOLOGICO NACIONAL DE MEXICO  
INSTITUTO TECNOLOGICO DE OAXACA  
Departamento de Ingenieria en Sistemas Computacionales

<img src="img/logoportada.png" alt="Logo de portada" width="260">

Materia: Programacion Web  
Actividad: Actividad 3. Componente visual reutilizable  

Docente: Martinez Nieto Adelina  
Grupo: 7SD  
Alumno: Valencia Borja Omar Rutilio  
Numero de control: 22161258  

Oaxaca, Oaxaca, 04 de Julio de 2026

</div>

# Tareas Desplegables

![Portada del componente](img/portada-tareas.png)

## Nombre del componente

**TareasDesplegables**

## Que problema resuelve

Este componente ayuda a mostrar varias tareas, pasos o instrucciones sin llenar toda la pantalla de texto. Cada tarea aparece como una tarjeta visual que el usuario puede abrir y cerrar con un clic.

Tambien incluye busqueda, boton de **Mostrar mas** y un formulario para agregar nuevas tareas. Las tareas nuevas aparecen arriba para que se vean primero.

## Instalacion

Para usar el componente en otro proyecto HTML, incluye el archivo CSS dentro de `<head>`:

```html
<link rel="stylesheet" href="css/componente.css">
```

Luego incluye el archivo JavaScript antes de cerrar el `<body>`:

```html
<script src="js/componente.js"></script>
```

## Uso

Primero agrega un contenedor donde se mostraran las tareas:

```html
<div id="lista-tareas"></div>
```

Despues crea el componente con JavaScript:

```html
<script src="js/componente.js"></script>
<script>
  const tareas = new TareasDesplegables('#lista-tareas', [
    {
      titulo: 'Revisar requisitos',
      descripcion: 'Confirmar que el proyecto tenga HTML, CSS, JS y README.'
    },
    {
      titulo: 'Probar el componente',
      descripcion: 'Abrir y cerrar las tarjetas para revisar la interaccion.'
    }
  ]);
</script>
```

## Agregar una tarea nueva

```js
tareas.agregar(
  'Publicar en GitHub Pages',
  'Subir el repositorio y activar GitHub Pages.'
);
```

## Buscar tareas

```js
tareas.buscar('github');
```

## Mostrar mas tareas

```js
tareas.mostrarMas();
```

## Ejemplo completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/componente.css">
  <title>Demo de tareas</title>
</head>
<body>
  <div id="lista-tareas"></div>

  <script src="js/componente.js"></script>
  <script>
    const tareas = new TareasDesplegables('#lista-tareas', [
      {
        titulo: 'Revisar requisitos',
        descripcion: 'Leer las instrucciones de la actividad.'
      },
      {
        titulo: 'Subir repositorio',
        descripcion: 'Publicar el proyecto en GitHub.'
      }
    ]);

    tareas.agregar('Grabar video', 'Hacer una demo de maximo 1 minuto.');
  </script>
</body>
</html>
```

## Capturas de pantalla

Agrega estas imagenes dentro de la carpeta `img`:

```text
img/logoportada.png
img/captura-componente.png
img/captura-busqueda.png
img/captura-consola.png
```

### Componente funcionando

![Componente funcionando](img/captura-componente.png)

### Busqueda de tareas

![Busqueda de tareas](img/captura-busqueda.png)

### Consola

Si no hay errores en consola, puedes subir una captura donde se vea limpia:

![Consola sin errores](img/captura-consola.png)

## Video demo

Graba un video corto de maximo 1 minuto con tu voz. Puedes seguir este guion:

```text
Hola, este es mi componente TareasDesplegables.
El problema que resuelve es que permite organizar varias tareas sin llenar la pagina de texto.
Cada tarea se puede abrir o cerrar con un clic.
Tambien puedo buscar una tarea, mostrar mas resultados y agregar una tarea nueva desde el formulario.
Este componente es reutilizable porque puedo cambiar la lista de tareas desde JavaScript sin reescribir el HTML.
```

## GitHub Pages

Despues de subir el repositorio a GitHub:

1. Entra a `Settings`.
2. Abre `Pages`.
3. Selecciona la rama `main`.
4. Guarda los cambios.
5. Entrega el enlace del repositorio y el enlace de GitHub Pages.
