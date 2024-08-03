# README: Proyecto Next.js con App Router y Zustand

  

## Introducción

Este proyecto es una aplicación Next.js que utiliza el nuevo App Router para una mejor experiencia de usuario y manejo de rutas. Emplea Zustand como gestor de estado global para facilitar la gestión de datos compartidos entre diferentes componentes.

  
  
  

## Configuración del Entorno

1. **Clonar el repositorio:**
```bash

   git clone https://github.com/rpenaloza080222/blossom-assestment-roibert-rickandmorty.git
```
  
2. **Instalar dependencias:**

```bash
cd blossom-assestment-roibert-rickandmorty

npm install
```

3. **Configura variable de entorno:**
Crea un archivo .env como está en el archivo env.example as{i}

```bash
URL_API_RICK_AND_MORTY_GRAPHQL=
```
Pega la url designada para tu backend en GraphQl

4. **Ejecutando la Aplicación:**  

Para iniciar el servidor de desarrollo local:  

```bash
npm run dev
```
  
  

La aplicación estará disponible en http://localhost:3000.

  

Utilizando la API de Rick and Morty

La aplicación consume datos de la API de Rick and Morty (https://rickandmortyapi.com/documentation). Las consultas a esta API se realizan en el directorio queries.

  

Estructura del Proyecto

app: Contiene las rutas y componentes principales de la aplicación.

modules:

home: Módulo específico para la página de inicio.

components: Componentes reutilizables.

constants: Constantes utilizadas en la aplicación.

data: Datos estáticos o mockeados.

hooks: Custom hooks para lógica reutilizable, incluyendo hooks de Zustand.

interfaces: Interfaces para tipado.

queries: Funciones para realizar consultas a la API de Rick and Morty.

services: Servicios para realizar operaciones relacionadas con la API.

stores: Gestión del estado global con Zustand.

shared: Código compartido entre diferentes módulos.

Zustand

Zustand se utiliza para gestionar el estado global de la aplicación. Los stores de Zustand se encuentran en el directorio stores.