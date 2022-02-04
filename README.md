# Backend proyecto bases de datos 2
Aplicación para la gestión de planes de estudio y sus notas.

## 🚩 Rutas
#### Autenticación y recuperación
- ``POST: /new_user``
- ``POST: /login``
- ``POST: /recovery``
- ``POST: /change-password``
#### Usuarios
- ``DELETE: /user/:id``
#### Planes de estudio
- ``GET: /planes``
- ``GET: /plan/:id``
- ``POST: /new_plan``
- ``DELETE: /planes/:id``
#### Notas
- ``GET: /notes/:id``
- ``GET: /note/:id``
- ``POST: /new_note``
- ``POST: /new_note``
- ``DELETE: /notes/:id``

## 🔐 Variables de entorno
> Para utilizar el proyecto es necesario contar con las siguientes variables de entorno:

````env
PORT=

URI_MONGODB=
URI_POSTGRESQL=

SECRET_JWT=

EMAIL_NODEMAILER=
PASSW_NODEMAILER=
````



## 👥 Integrantes:
- [Daniela Jurado Blandón](https://github.com/dionej11 "Daniela Jurado Blandón")
- [Juan Esteban Galvis](https://github.com/JuanesGalvis "Juan Esteban Galvis")
- [Santiago Restrepo Idárraga](https://github.com/Santiago-Restrepo "Santiago Restrepo Idárraga")
- [Miguel Ángel Bedoya Bonilla](https://github.com/MiguelABoni "Miguel Ángel Bedoya Bonilla")
- [Isabela Ceballos Franco](https://github.com/IsabelaCeballos "Isabela Ceballos Franco")