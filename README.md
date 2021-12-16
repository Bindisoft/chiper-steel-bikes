# Weelo Technical Test
## _Información y conversion de cripto-monedas_

##### El desarrollo se realizó basado en el siguiente requerimiento: 

Una gran compañía de bienes raíces requiere crear un sitio para obtener información de cripto-moneda en dólares porque el gobierno decidió usarlo como moneda por defecto para EEUU. 
Se necesita crear una lista de cripto-moneda, mostrar el cambio a dólares (usd), lista de filtros y mostrar el detalle.

##### Arquitectura y Estructura

Se implementó una arquitectura basada en DDD y Hexagonal Architecture, claro está no al pie de la letra ya que considero que este tipo de arquitecturas son muy estrictas para ser trabajadas especialmente en el paradigma de programación orientada a objetos y en lo personal me siento más cómodo con la programación funcional. Sin embargo rescato las buenas prácticas de estas arquitecturas e intento llevarlas a mis proyectos.

![Screenshot](Documentation/arquitectura.png)

Esta estructura de carpetas se puede tomar como un estándar para escalar el proyecto de forma muy favorable ya que se separan las capas del dominio y de la infraestructura muy claramente.

## Caracteristicas de la solución

- Consulta en linea de la información actualizada de las cripto - monedas
- Conversión de valores a dolares y conversión entre cripto - monedas
- Filtrado de información de cripto - monedas
- Interfaz limpia y agradable

## Tech

Para el desarrollo se utilizaron varios proyectos de código abierto:

- [Create React App](https://create-react-app.dev/) - Set up a modern web app by running one command.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [MATERIAL - UI](https://material-ui.com/es/) - Componentes de React para un desarrollo web más rápido y sencillo.
- [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux
- [Ramda](https://ramdajs.com/) - A practical functional library for JavaScript programmers.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Dillinger](https://dillinger.io/) - Online Markdown Editor.

## Instalación

Se requiere [Node.js](https://nodejs.org/) v10+.

Instalar las dependencias e iniciar el programa.

```sh
cd weelo-technical-test
npm i
npm run start
```
## Test

```sh
npm run test
```

#### Proyecto en Producción

[En Linea](http://198.12.230.103:9000/)

## License

MIT
