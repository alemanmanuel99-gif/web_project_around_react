# Alrededor de los EE.UU. — Migración a React

Este proyecto es la migración de la aplicación web "Alrededor de los EE.UU." de HTML/CSS/JavaScript puro a **React** con **TypeScript**, usando **Vite** como herramienta de construcción.

## Descripción

La aplicación muestra el perfil de un usuario y una galería de tarjetas con imágenes de distintos lugares de EE.UU. Permite:

- Ver el perfil del usuario (nombre, descripción y avatar).
- Abrir una ventana emergente para editar el perfil.
- Abrir una ventana emergente para actualizar la foto de perfil.
- Agregar una nueva tarjeta mediante una ventana emergente con formulario.
- Ver la imagen de una tarjeta en tamaño completo en una ventana emergente.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS (BEM)

## Estructura del proyecto

El código está organizado en componentes reutilizables dentro de `src/components`, incluyendo un componente `Popup` genérico que se reutiliza para las distintas ventanas emergentes de la aplicación (`NewCard`, `EditProfile`, `EditAvatar`, `ImagePopup`).

## Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Instala las dependencias:

npm i

3. Inicia el servidor de desarrollo:

npm run dev

4. El proyecto se abrirá automáticamente en `http://localhost:3000`.
