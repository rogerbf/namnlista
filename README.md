# namnlista

Fetches name-day of the day, or all of them.

``` javascript
const namnlista = require('namnlista')

namnlista.today()
  .then(names => console.log(names))
// {
//   main: [ 'Moritz', 'Maurits' ],
//   alternate: [ 'Mayank', 'Mehmedina', 'Priyanka', 'Titti' ]
// }
```
