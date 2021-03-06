# Backend proyecto bases de datos 2
Aplicaci贸n para la gesti贸n de planes de estudio y sus notas.

## 馃毄 Rutas - 馃挌 MongoDB 
#### Autenticaci贸n y recuperaci贸n
- ``POST: /new_user``           -> Registro
- ``POST: /login``              -> Iniciar sesi贸n
- ``POST: /recovery``           -> Correo para recordar contrase帽a
- ``POST: /change-password``    -> Nueva contrase帽a
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

## 馃毄 Rutas - 馃悩 PostgreSQL
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

## 馃攼 Variables de entorno
> Para utilizar el proyecto es necesario contar con las siguientes variables de entorno:

````env
PORT=

URI_MONGODB=
URI_POSTGRESQL=

SECRET_JWT=

EMAIL_NODEMAILER=
PASSW_NODEMAILER=
````



## 馃懃 Integrantes:
- [Daniela Jurado Bland贸n](https://github.com/dionej11 "Daniela Jurado Bland贸n")
- [Juan Esteban Galvis](https://github.com/JuanesGalvis "Juan Esteban Galvis")
- [Santiago Restrepo Id谩rraga](https://github.com/Santiago-Restrepo "Santiago Restrepo Id谩rraga")
- [Miguel 脕ngel Bedoya Bonilla](https://github.com/MiguelABoni "Miguel 脕ngel Bedoya Bonilla")
- [Isabela Ceballos Franco](https://github.com/IsabelaCeballos "Isabela Ceballos Franco")
