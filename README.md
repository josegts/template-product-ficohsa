# Proyecto Base para Squads de Producto

## Stack Tecnológico

- Framework: Next.js v13.4.19
- Biblioteca: React.js v18.2.0
- Dependencias
  - Test Unitarios
    - Jest: v29.6.4
    - React testing library: v14.0.0
  - Typescript: v5.2.2
  - Fetching de Datos
    - Axios v1.5.0
  - Manejo de estados globales y asincronía
    - Zustand: v4.1.1
    - Tanstack - React Query: v4.35.3
  - Manejo de copys e internacionalización
    - [i18next](https://react.i18next.com/): v23.5.1
    - react-i18next: v13.2.2
  - Linter de código:
    - Eslint
    - Prettier
  - Componentes transversales de FD GFF
    > Aquí debe ir la versión de librería publicada
- Estilos
  - [CSS modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
  - [Material UI styles](https://mui.com/material-ui/customization/how-to-customize/)
- Gestor de paquetes: Npm

## Estructura de proyecto

```

./__test__
  |_./components
  | |_./organism
  | |_./sections
  | |_...
  |_./pages
./.vscode
./public
./src
  |_./assets
  | |_./icons
  | |_./images
  |_./components
  | |_./organism
  | |_./sections
  | |_...
  |_./pages
  | |_./api
  | |_...
  | |_./_app.tsx
  | |_./_document.tsx
  | |_./index.tsx
  |_./shared
  | |_./constants
  | |_./i18n
  | | |_./config
  | | |_./translates
  | |   |_./feature_example
  | |   | |_./en.ts
  | |   | |_./es.ts
  | |   | |_./index.ts
  | |   |_...
  | |   |_./index.ts
  | |_./models
  | |_./utils
  | |_...
  |_./styles
  | |_./globals.css
  | |_theme.ts


```

## Descripción de estructura

- \_**test\_**\: Centralización de test unitarios para todos los componentes y páginas del proyecto
- **assets**: Carpeta que centraliza todos los assets que se utilizarán en el proyecto:

  - **icons**:
    - hornamentals: Con extensión **webp**. Tratamiento de la Imagen, [más información](https://nextjs.org/docs/pages/api-reference/components/image)
    - Para el resto de iconos estos deben ser consumidos desde la libreria de componentes transversales
  - **images**: Con extensión **webp**, deberán ser colocadas las imagenes que se encuentran en el repositorio que se ha entregado al squad

- src:

  - components:

    - common: Componentes que utlizan los componentes de ui
    - layout: Componentes genericos
    - ui: Componentes reutilizables por otros componentes

    * Nomenclatura en camelcase

  - core: Archivos que no cambian comunmente, tiene prioridad basica

    - axiosAgent: Configuraciones de Axios previas y posteriores a los requests
    - index: Base en donde se exportan todos los services
    - store: Configuración básica de redux

    * Nomenclatura en camelcase

  - hooks:

    - index: base en donde se exportan todos los hooks

    * Nomclatura en camelcase

  - models:

    - const:
      - enums: archivo en donde estan las variables exactas
    - components: typar lo que se encuentra en la carpeta de src/components
    - views: typar lo que se encuentra en la carpeta src/views

    * Nomenclatura del '.' example: credit.type.ts

  - services: Donde se realizan peticiones

    - index: base en donde se exportan todos los services

    * Nomenclatura del '.' example: credit.type.ts

  - stateManagment:

    - index: base en donde se exportan todos lo que se encuentra en stateManagement

    * Nomenclatura del '.' example: credit.type.ts

  - styles:

    - global.scss: estilos globales
    - resolver dudas

    * Nomenclatura del '.' example: credit.type.ts

  - utils: funciones reutilizables

    - index: base en donde se exportan todos lo que se encuentra en utils

    * Nomenclatura del '.' example: credit.type.ts

  - views: aqui iran nuestras vistas, luego se llamaran en `pages/`, Example:
    - home:
      - index.tsx
      - styles.module.scss
    * Nomclatura en camelcase

## Nota
