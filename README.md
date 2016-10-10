# namnlista

Fetches name-day of the day, or all of them.

## usage

### node

``` javascript
const namnlista = require('namnlista')

namnlista.today()
  .then(names => console.log(names))
// {
//   main: [ 'Moritz', 'Maurits' ],
//   alternate: [ 'Mayank', 'Mehmedina', 'Priyanka', 'Titti' ]
// }
```

#### api

##### `.all()`

Scrapes svenskaakademien.se for all currently and previously included names.

##### `.today()`

Fetches todays names.

### cli

#### installation

```
npm i -g namnlista
```

#### example

```
> namnlista
Todays names: Harry, Harriet alternate: Harri
```
