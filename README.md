# Proyecto de Prueba: API de Rick and Morty con Next.js, Tailwind y Shadcdn

![Rick and Morty](https://raw.githubusercontent.com/tuusuario/rick-and-morty-graphql/main/public/rick-and-morty-banner.jpg)

Este es un proyecto de ejemplo que utiliza la API de Rick and Morty para mostrar datos de los personajes. Está construido con Next.js, estilizado con Tailwind CSS, y utiliza Shadcdn para la entrega de contenido estático.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/rick-and-morty-graphql.git
   cd rick-and-morty-graphql

Instala las dependencias:

bash
Copy code
npm install
o

bash
Copy code
yarn install
Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:

bash
Copy code
npm run dev
o

bash
Copy code
yarn dev
Luego abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

Construcción
Para construir la aplicación para producción, ejecuta:

bash
Copy code
npm run build
o

bash
Copy code
yarn build
Esto generará una carpeta out con los archivos estáticos optimizados.

Despliegue
Después de construir la aplicación, puedes desplegar el contenido de la carpeta out en cualquier servidor estático o plataforma de alojamiento como Vercel, Netlify, GitHub Pages, etc.

Estructura del Proyecto
pages/: Contiene las páginas de Next.js.
components/: Componentes reutilizables de React.
styles/: Archivos de estilo, principalmente configuraciones de Tailwind CSS.
graphql/: Consultas y mutaciones GraphQL.
Uso de la API de Rick and Morty
Este proyecto utiliza la API de Rick and Morty para obtener datos de los personajes. La configuración de la API se encuentra en el archivo graphql/queries.js.

Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Agregar nueva funcionalidad').
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme.

Contacto
Tu Nombre
Correo Electrónico

