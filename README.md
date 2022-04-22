# Pokemon APP

![Logo Pokemon](./src/app/assets/logo.png)

#### Objetivo

Vamos a construir nuestra primera aplicación web combinando todo lo aprendido hasta ahora en HTML/CSS y Javascript

El objetivo es enriquecer y mejorar la aplicación base, para entender el comportamiento de cada componente en nuestra app.

#### API

Consumiremos la [API pública de Pokemon](https://pokeapi.co/) para listar y consultar el detalle de un Pokemon concreto

#### Stack tecnológico
 - Node + NPM
 - Webpack + Babel
 - HTML/CSS
 - Bootstrap
 - Sass
 - Javascript (ES6)

#### Reto

Una vez comprendido el funcionamiento de una API y como consumir recursos de una base de datos, podemos construir cualquier app atacando a cualquier API pública. El reto consiste en construir una webapp con otra API y la temática deseada.

> Las APIs deben ser públicas y de fácil uso (evitar APIs que requieran token de acceso)

#### Start up

Para arrancar el `webpack-dev-server`:
```sh
npm install
npm start
```

Para arrancar el `json-server` desde `/backend`:
```sh
cd backend
npm install
npm run server
```

#### Git Flow

Existe una rama `master` con el proyecto resuelto de una manera básica.

La idea consiste en partir desde `develop` para crear una solución desde cero.

```sh
git checkout develop
git branch feature/alberto-rivera-merida
git checkout feature/alberto-rivera-merida
```

Y a trabajar! 😎
