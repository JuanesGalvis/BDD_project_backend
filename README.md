# Backend proyecto bases de datos 2
Aplicación para la gestión de planes de estudio y sus notas.

## 🚩 Rutas - 💚 MongoDB 
#### Autenticación y recuperación
- ``POST: /new_user``           -> Registro
- ``POST: /login``              -> Iniciar sesión
- ``POST: /recovery``           -> Correo para recordar contraseña
- ``POST: /change-password``    -> Nueva contraseña
- ``DELETE: /user/:id``         -> Eliminar usuario
#### Planes de estudio
- ``GET: /planes``              -> Todos los planes de un usuario
- ``GET: /plan/:planId``            -> Un plan en especificio
- ``POST: /new_plan``           -> Crear nuevo plan de estudios
- ``DELETE: /planes/:planId``       -> Eliminar un plan
- ``PUT: /plan/:planId``            -> Actualizar un plan
#### Notas
- ``GET: /notes/:planId``           -> Todas las notas de un plan de estudios
- ``POST: /new_note/:planId``       -> Crear nueva nota
- ``DELETE: /notes/:planId``        -> Actualizar una nota 
- ``PUT: /notes/:planId``           -> Eliminar una nota 

## 🚩 Rutas - 🐘 PostgreSQL
- ``GET: /areas``                   
- ``POST: /asignaturas``                
- ``GET: /ciudades``
- ``GET: /departamentos``
- ``POST: /empleados``
- ``GET: /facultades``
- ``POST: /grupos``
- ``GET: /paises``
- ``GET: /programas``
- ``GET: /sedes``

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
