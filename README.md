DhTest
Este proyecto es una aplicación web desarrollada con Angular y Angular Material que consume una API externa para mostrar una lista de usuarios con funcionalidades de tabla avanzadas.

Características
Listado de Usuarios: Muestra una tabla con datos de usuarios obtenidos de https://jsonplaceholder.typicode.com/users.

Paginación: Permite navegar a través de los datos de la tabla en páginas.

Ordenamiento (Sorting): Posibilidad de ordenar las columnas de la tabla.

Filtrado: Un campo de entrada para filtrar los usuarios por cualquier columna visible.

Detalles del Usuario (Modal): Un botón de "ojo" en cada fila que abre un modal con todos los detalles de un usuario específico.

Tooltips: El botón de "ojo" incluye un tooltip para mejorar la usabilidad.

Tecnologías Utilizadas
Angular: Framework para construir la interfaz de usuario.

Angular Material: Librería de componentes UI que implementa Material Design.

HttpClient: Módulo de Angular para realizar peticiones HTTP a APIs externas.

TypeScript: Lenguaje de programación utilizado.

Cómo Ejecutar el Proyecto
Para poner en marcha este proyecto en tu entorno local, sigue los siguientes pasos:

Clonar el repositorio:

git clone https://github.com/ceordev/dhtest
cd DhTest

Instalar dependencias:
Una vez dentro del directorio del proyecto, instala todas las dependencias necesarias:

npm install

Iniciar el servidor de desarrollo:
Después de que el proceso de instalación finalice, puedes iniciar la aplicación:

ng serve

Esto compilará la aplicación y la servirá en http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

Estructura del Proyecto (Componentes Clave)
app.component.ts: Componente principal que gestiona la tabla de usuarios, la lógica de filtrado, paginación y la apertura del modal de detalles.

services/user.service.ts: Un servicio que encapsula la lógica para obtener los datos de los usuarios desde la API.

interfaces/user-data.interface.ts: Define la estructura de datos para un objeto de usuario.

user-details-dialog/user-details-dialog.component.ts: Componente standalone que actúa como el modal para mostrar los detalles completos de un usuario.

app.config.ts: Archivo de configuración para aplicaciones standalone de Angular, donde se provee HttpClient globalmente.

<img width="1430" height="549" alt="image" src="https://github.com/user-attachments/assets/6771d2d3-9d75-42c0-95b9-ff4f79c2417a" />

<img width="889" height="644" alt="image" src="https://github.com/user-attachments/assets/faa0a694-4dea-4500-a79c-72bf42e2f4a6" />


