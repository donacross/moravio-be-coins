# moravio-be-coins
Moravio - backend task - coins.

https://hackmd.io/3MSmOwe3RV6Zoyzd4JUyOQ

## Install
`npm install moravio-be-coins`

## Usage
```ts
import { getChange } from 'moravio-be-coins';

getChange(12, [1, 2, 5]); // [5, 5, 2]
```

## Run tests
`npm test`

## CI / CD with GitHub Actions
Tests are run after every push on any branch.

The package is auto-published on npm after each GitHub release.

## Thank you 🙂