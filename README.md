# Prueba Técnica Finaktiva

## Contents

- [REPO](https://github.com/andresalzategomez/MarvelFinaktiva.git)
- [Description](#description)
- [Usage](#usage)
  - [Run Project ](#run-project)
- [Requirements](#requirements)
- [API](#api)
  - [Marvel API](#marvel-api)
- [Capas de la Aplicación](#Capas-de-la-Aplicación)
  - [Capa de Aplicación](#Capa-de-Aplicación)
  - [Capa de Persistencia](#Capa-de-Persistencia)
  - [Capa de Modelo](#Capa-de-Modelo)
  - [Capa de Servicio](#Capa-de-Servicio)
  - [Capa de Vista](#Capa-de-Vista)
- [License](#license)

## Description

Este proyecto está realizado en Vanilla JavaScript para la prueba ténica de Finaktiva. Se consume la API de Marvel y se muestra los personajes y comics asociados, permitiendo agregar a favoritos en LocalStorage.
## Usage

### Run Project

Se descarga el Repositorio y se abre el archivo `index.html`

## Requirements

Es Vanilla JavaScript, por lo tanto no tiene dependencias.

## API

### Marvel API

Se consume la API de Marvel con las credenciales generadas.

## Capas de la Aplicación
### Capa de Aplicación
Capa que permite la manipulación de los datos obtenidos y reglas de negocio.

- js/application/loadCharacter.js
- js/application/loadFavourites.js
- js/application/modal.js

### Capa de Persistencia
Capa que permite el almacenamiento de los datos en LocalStorage
- js/data/save.js

### Capa de Modelo
Capa que permite la creación de las clases necesarias
- js/model/favourite.js

### Capa de Servicio
Capa que permite el uso de servicios, consumo de API y conexión entre la aplicación y la persistencia.
- js/services/consumeapi.js
- js/services/favServices.js

### Capa de Vista
Capa que permite la visualización de la vista
- index.html

## License

The JavaScript Templates script is released under the
[MIT license](https://opensource.org/licenses/MIT).