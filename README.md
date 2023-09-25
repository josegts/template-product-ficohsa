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

    - **constants**: Contiene variables constantes generales para el uso de toda la aplicación
    - **hooks**: Seguir la convención de creación de [hooks recomendada por Reactjs](https://react.dev/reference/react). Se requiere se generen hooks de utilización de toda la aplicación
    - **i18n**: Contiene configuración y translates para el uso de toda la aplicación. Se requiere utilizar la misma estructura de components para agregar copys.
      - config
      - translates
        - globals: Se requiere utilizar la misma disposición de orden de carpetas de components. Y utilizar archivos `en.ts` para traducciones inglés y `es.ts` para copys en español
    - **models**: Contiene models que se utilizaran en toda la aplicación
    - **services**: Cada carpeta contiene literalmente el path del servicio que se consumirá
    - **utils**: Cada carpeta contiene funciones y métodos que se utilizan en toda a aplicación

  - **styles**: Contiene files de estilos (CSS) que contienen los estilos globales de la aplicación, como fuente, variables constantes que se utilizan en la aplicación y configuración de temas.

## Convenciones y lineamientos de desarrollo Frontend

- **Linter**: El proyecto tiene la configuración de Linter que se utiliza en el proyecto, para fines de estandarización y manteniemiento del código debe ser respetado.

- **Copy/Textos/Label**: Ningún copy/texto/label en la aplicación debe ser quemado en el código de la aplicación.
  > Deberá siempre insertarse con la ayuda del archivo de configuración de **_i18next_**. Con el fin de que cualquier texto/copy/label sea mantenido en un solo sector de la aplicación y pueda tener las traducción y redacción que el Producto necesita.
- **Formularios**: Todo formulario o campo input que sea implementado debera usar su respectiva validación con la ayuda de **_React Hook Forms_** y **_Zod_**
- **Persistencia de datos de flujo**: Por definir

- **Estados globales, parciales y Servicios**:

  > Con la finalidad, que los componentes contengan la responsabilidad única de renderizar UI de vista y que de esta manera, los componentes sean sean mantenibles y escalables, y se abstraigan de las demás capas de la aplicación.

  - **Consumo de Store**: Todo componente no debe contener lógica de negocio en consumo de estados. Debe manejarse a través de la page que es el componente padre de todas las vistas, por concepto de herencia a través de las props.
  - **Consumo de Servicios**: Todo componente podrá consumir servicios mediante efectos y handlers (change, submit o etc), pero no debe contener la tecnología o implementar la funcion que realiza el fetching de datos.
  - **Funciones**: Toda función que necesite argumentos deberá recibir solo objetos, por principio de extensibilidad.
  - **Servicios**: Todo servicio deberá manejar el tipado del _request_ de la petición y deberá adaptar la _respuesta_ de acuerdo a las necesidades de la lógica de negocio.
    ```
      ./[nombre-path-api-servicio]
        ./[nombre-path-api-servicio].service.ts
    ```
  - **Hooks**: Deberá utilizarse para manejar fetching de datos a traves de **_React Query_** para manejar los estados asíncronos de las peticiones. También deben ser usados para no repetir código en efectos y memoizar estados y métodos que se utilizan en la aplicación.

- Cada página de la aplicación deberá contener sus tags _head_ de HTML para optimizar [SEO](https://nextjs.org/learn/seo/rendering-and-ranking/metadata)
- Todo asset de imagen (fotografía o ilustración banner, con extensión .webp) que consuma en la aplicación debe ser optimizada e implementada con el componente [_Image_](https://nextjs.org/docs/pages/api-reference/components/image) de NextJS
- Para generar un componente nuevo, crear carpeta con el nombre y el contenido debe iniciar con index.tsx

```
  ./[nombre-componente]
    ./index.tsx
```

- Para generar estilos de un componente, es preferible este bajo el contexto o el dominio del mismo, es decir:

```
  ./[nombre-componente]
    ./index.tsx
    ./[nombre-componente].module.css
```

- De haber componentes atómicos de uso exclusivo del negocio y del componente padre. Seguir la estructura de la carpeta componente para generar archivos. Y así mismo para estilos de componente hijo exclusivo, de ser necesario o puede manejar estilos desde estilos del componente padre.

```
  ./[nombre-componente-padre]
    ./components
      ./[nombre-componente-hijo-exclusivo]
        ./index.tsx
        ./[nombre-componente-hijo-exclusivo].module.css //<-- opcional
    ./index.tsx
    ./[nombre-componente-padre].module.css
```

- Assets deben respetar el orden establecido. Y para ilustraciones banner y fotografías, deben usarse imagenes de tipo webp:
  - icons
    - hormament
  - images

## Criterios de Aceptación de desarrollo Frontend

- [HTML semántico](https://keepcoding.io/blog/que-es-el-html-semantico-y-por-que-usarlo/)
- [Principios SOLID](https://ficohsa-confluence.atlassian.net/wiki/spaces/DBS/pages/132972556)
- [DRY](https://es.legacy.reactjs.org/docs/thinking-in-react.html)
- Seguir el orden establecido [Atomic Design](https://adrianalonso.es/arquitectura-del-software/atomic-web-design-o-diseno-guiado-por-componentes/) en la construcción de componentes

- Documentación descriptiva y declarativa de código en funciones, servicios, efectos, handlers, constantes. Usar convención [JSDocs](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

# NOTA IMPORTANTE

> Cada Code review debe respetar estos criterios, lineamientos y convenciones, con la finalidad de obtener código estandarizado, escalable y mantenible.
