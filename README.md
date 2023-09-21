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
- **src**: Lleva todo el código fuente de la aplicación

  - **assets**: Carpeta que centraliza todos los assets que se utilizarán en el proyecto:
    - **icons**:
      - hornamentals: Con extensión **webp**. Tratamiento de la Imagen, [más información](https://nextjs.org/docs/pages/api-reference/components/image)
      - Para el resto de iconos estos deben ser consumidos desde la libreria de componentes transversales
    - **images**: Con extensión **webp**, deberán ser colocadas las imagenes que se encuentran en el repositorio que se ha entregado al squad
  - **components**: Contiene todos la organización de componentes bajo [Atomic Design](https://adrianalonso.es/arquitectura-del-software/atomic-web-design-o-diseno-guiado-por-componentes/). Debe establecer file barrel. Para la construcción de hooks, servicios, constants o modelos de uso explusivo del componente, este debe ser generado bajo la estructura de `shared` dentro de la carpeta del componente.

    - **organisms**: Solo Componentes de orden organismo, es decir, que contiene una o mas moleculas y atomos.
    - **sections**: Solo Componentes que contienen uno o mas componentes organisms, moleculas y atomos.
    - **molecules**: Solo Componentes que contienen mas de un componente átomo.
    - **atoms**: Componente mas pequeño en el orden establecido.

  - **pages**: Cada carpeta contendrá el componente principal de la vista. El file index.tsx contendra la página root `'/'`, dejando los files \_app.tsx y \_document.tsx como archivos para configuración general del proyecto y rutas. En \_app.tsx se podrá wrappear la aplicación con los providers que afectaran a toda la aplicación. En el archivo \_document.tsx se podrá colocar la configuración SEO general de la aplicación.

    - **api**: Cada carpeta contendrá literalmente el path del servicio que se consumirá.

  - **shared**: Contiene metodos y funciones para el uso general de toda la aplicación.

    - **constants**
    - **i18n**: Contiene configuración y translates para el uso de toda la aplicación. Se requiere utilizar la misma estructura de components para agregar copys.
      - config
      - translates
        - globals: Se requiere utilizar la misma disposición de orden de carpetas de components. Y utilizar archivos `en.ts` para traducciones inglés y `es.ts` para copys en español
    - **models**: Contiene models que se utilizaran en toda la aplicación
    - **services**: Cada carpeta contendrá literalmente el path del servicio que se consumirá
    - **hooks**: Seguir la convención de creación de [hooks recomendada por Reactjs](https://react.dev/reference/react). Se requiere se generen hooks de utilización de toda la aplicación

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
