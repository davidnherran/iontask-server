<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Backend de IonTask - Nest.js

Este es el backend de la aplicación IonTask, construido con el framework Nest.js. Proporciona una API para gestionar usuarios, proyectos y autenticación, y está documentado en Swagger para facilitar su uso.

## Información de la API

- **URL de la API:** [https://api.iontask.site/api/v1](https://api.iontask.site/api/v1)

- **Documentación de Swagger:** [https://api.iontask.site/docs](https://api.iontask.site/docs)

### Rutas

#### Users

- **Registrar Usuario**
  - Método: POST
  - Ruta: `/api/v1/users/register`

- **Agregar Usuario a Proyecto**
  - Método: POST
  - Ruta: `/api/v1/users/add-to-project`

- **Obtener Todos los Usuarios**
  - Método: GET
  - Ruta: `/api/v1/users/all`

- **Obtener Usuario por ID**
  - Método: GET
  - Ruta: `/api/v1/users/{id}`

- **Actualizar Usuario por ID**
  - Método: PUT
  - Ruta: `/api/v1/users/update/{id}`

- **Eliminar Usuario por ID**
  - Método: DELETE
  - Ruta: `/api/v1/users/delete/{id}`

#### Projects

- **Crear Proyecto**
  - Método: POST
  - Ruta: `/api/v1/projects/create`

- **Obtener Todos los Proyectos**
  - Método: GET
  - Ruta: `/api/v1/projects/all`

- **Obtener Proyecto por ID**
  - Método: GET
  - Ruta: `/api/v1/projects/{projectId}`

- **Actualizar Proyecto por ID**
  - Método: PUT
  - Ruta: `/api/v1/projects/update/{projectId}`

- **Eliminar Proyecto por ID**
  - Método: DELETE
  - Ruta: `/api/v1/projects/delete/{projectId}`

#### Auth

- **Iniciar Sesión (Login)**
  - Método: POST
  - Ruta: `/api/v1/auth/login`

## Instalación

Para poner en funcionamiento este proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.

```bash
git clone [https://github.com/davidnherran/iontask-server.git](https://github.com/davidnherran/iontask-server.git)
```


```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
