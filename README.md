# Fantasy premier league

Call the English fantasy premier league and get a list of players or a list
of teams, built with typescript.

If you install the types you can also get autocompletion in some IDEs or editors like VScode

## Install

```shell
npm i --save fantasy-premier-league
```

## Usage

There is only one function for Teams and Players which is ```listAll()``` which takes no arguments and returns an untyped list.

```javascript
const {Teams, Players} = require('fantasy-premier-league');
new Teams().listAll()
           .then(console.log); // Array of teams

new Players().listAll()
             .then(console.log); // Array of players

```
