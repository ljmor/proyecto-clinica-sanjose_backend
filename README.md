# Sistema de Gestión Hospitalaria Clínica San José

## Descripción
El Sistema de Gestión Hospitalaria Clínica San José es una aplicación web en desarrollo diseñada para optimizar los procesos administrativos y clínicos de la institución. Esta plataforma, construida con React y Material UI, ofrece una interfaz intuitiva y moderna para gestionar de manera eficiente la información de pacientes, historias clínicas, tratamiento médico y gestión del personal médico.

## Equipo de Desarrollo
* **Luis Mora:** [@ljmor](https://github.com/ljmor)
* **Renato Rojas:** [@GabrielR1906](https://github.com/GabrielR1906)
* **Oliver Saraguro:** [@OliverSaraguro](https://github.com/OliverSaraguro)
* **Juan García:** [@JuanD425567](https://github.com/JuanD425567)

## Módulos Principales
* **Gestión de usuarios:** CRUD de los usuarios del sistema según su rol (médicos, enfermería, administrador y recepcionista).
* **Acceso al sistema (Auth):** Implementa un sistema de autenticación seguro para controlar el acceso a las diferentes funcionalidades de la aplicación según el rol del usuario.
* **Historias clínicas:** Facilita la creación, gestión y consulta de las historias clínicas de los pacientes, clasificadas y basadas en una serie de formularios suministrados por la institución.
* **Diagnóstico digital del paciente:** Sección de la historia clínica de los pacientes para describir los tratamientos médicos a administrar, bajo el diagnóstico del caso emitido por el o los doctores involucrados.
* **Ingreso prehospitalario:** Permite gestionar el ingreso de pacientes a través de servicios prehospitalarios, registrando información relevante para su atención inicial.

## Tecnologías Utilizadas
* **Frontend:** React, Material UI
    * **react-icons:** Proporciona un conjunto de iconos personalizables para enriquecer la interfaz de usuario.
    * **mui:** Biblioteca de componentes de interfaz de usuario basada en Material Design, que facilita la creación de interfaces visualmente atractivas y consistentes.
    * **react-redux-toolkit:** Ofrece herramientas para gestionar el estado de la aplicación de manera eficiente, simplificando la implementación de la lógica de negocio.
    * **react-router:** Permite crear aplicaciones web de una sola página (SPA), facilitando la navegación entre diferentes vistas.
    * **axios:** Biblioteca para realizar peticiones HTTP, facilitando la comunicación con el backend.
* **Backend:** Node.js, Express, MySQL
    * **Node.js:** Entorno de ejecución de JavaScript que permite construir aplicaciones web escalables.
    * **Express:** Framework web minimalista para Node.js, que simplifica la creación de servidores HTTP.
    * **MySQL:** Sistema de gestión de bases de datos relacionales, utilizado para almacenar la información del sistema.

¡Claro\! Aquí te presento un borrador de instrucciones detalladas para que alguien pueda clonar y trabajar en tu proyecto, considerando que utilizas Vite y Yarn:

## Instrucciones para configurar y ejecutar el proyecto

### Requisitos previos

  * **Node.js y npm (o yarn) instalados:** Asegurarse de tener Node.js y un gestor de paquetes como npm o yarn instalados en el sistema. Puedes descargarlos desde [https://nodejs.org/](https://www.google.com/url?sa=E&source=gmail&q=https://nodejs.org/).
  * **Un editor de código:** Visual Studio Code, Sublime Text o cualquier otro editor de tu preferencia.

### Clonar el repositorio

1.  **Abrir terminal o línea de comandos.**
2.  **Navegar hasta la carpeta donde desea clonar el proyecto:**
    ```bash
    cd /ruta/a/tu/carpeta/deseada
    ```
3.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/ljmor/proyecto-clinica-sanjose
    ```

### Instalar dependencias

1.  **Accede al directorio del proyecto:**
    ```bash
    cd proyecto-clinica-sanjose
    ```
2.  **Instala las dependencias:**
    ```bash
    yarn install
    ```
    Este comando instalará todas las dependencias listadas en el archivo `package.json`.

### Iniciar el servidor de desarrollo

1.  **Inicia el servidor de desarrollo:**
    ```bash
    yarn dev
    ```
    Esto iniciará un servidor de desarrollo local y abrirá la aplicación en el navegador por defecto. Por lo general, la dirección será `http://localhost:3000`.

### Estructura del proyecto

  * **src:** Contiene el código fuente de tu aplicación React.
  * **public:** Contiene archivos estáticos como el archivo logos de la app.
  * **node\_modules:** Contiene las dependencias instaladas.

### Trabajar en el proyecto

  * **Realizar cambios en los archivos de la carpeta `src`:** Edita los componentes, estilos y lógica del módulo que te corresponde.
  * **Guarda los cambios:** Los cambios se guardarán automáticamente y el servidor de desarrollo recargará la página.
  * **Utiliza las herramientas de desarrollo de tu navegador:** Para depurar y inspeccionar tu aplicación.

### Construir para producción

1.  **Para crear una versión de producción:**
    ```bash
    yarn build
    ```
    Esto generará los archivos estáticos optimizados en la carpeta `dist`.


## Estado del Proyecto
El proyecto se encuentra actualmente en fases iniciales de desarrollo. Este README será actualizado periódicamente para reflejar los avances y cambios realizados. 

**Nota:** Podria actualizarse este README en el futuro con:
* **Arquitectura:** Diagrama de la arquitectura del sistema (si aplica).
* **Instalación:** Instrucciones para clonar y ejecutar el proyecto.
* **Contribuciones:** Guía para que otros desarrolladores contribuyan al proyecto.
* **Licencia:** Especifica la licencia bajo la cual se distribuye el código.
