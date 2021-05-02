# Servidor Node.js

Servidor Node.JS sencillo para manejar solicitudes GET, POST y PUT.

## Instalación

Descarga el repositorio en tu equipo

```
git clone https://github.com/marcosrivasr/node-server.git
```

acceder al servidor

```
cd node-server
```

Ejecuta el servidor

```
npm start
```

## Limitaciones

### Estructura JSON

El servidor web simula el manejo de datos a través de filesystem y un archivo llamado `data.json`. Los datos que se esperan deben de ser en forma de arreglo para poder ser accedidos. Por ejemplo:

```json

[
    {
        "id": 0,
        "title": "Hola a todos"
    },
    {
        "id": 1,
        "title": "Este es otro mensaje"
    }
]

```

### CORS

El servidor tiene configurado CORS para permitir a cualquier dominio poder hacer solicitudes HTTP.

### Métodos

El servidor solo tiene implementado el método `GET`, `POST` y `PUT`.