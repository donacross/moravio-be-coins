# moravio-be-coins
Moravio - backend task - coins.

https://hackmd.io/3MSmOwe3RV6Zoyzd4JUyOQ

## Install
`npm install moravio-be-coins`

## Usage
```ts
import { getChange } from 'moravio-be-coins';

getChange(12, [1, 2, 5]); // ✔️  [5, 5, 2]

getChange(12, [1, 4, 5]); // ✔️ [4, 4, 4]

getChange(.3, [.2, .1]); // ✔️ [.2, .1]

getChange(12, [5]); // ❌ -1
```

## Breaking changes from 2.0.0 to 3.0.0
`getChange()` no longer returns an object but directly the change or `-1` if it can't be calculated.

## Run tests
`npm test`

## CI / CD with GitHub Actions
Tests are run after every push on any branch.

The package is auto-published on npm after each GitHub release.

## Thank you 🙂
I'd be very happy to have your feedback on this.