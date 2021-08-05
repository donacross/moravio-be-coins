# moravio-be-coins
Moravio - backend task - coins.

https://hackmd.io/3MSmOwe3RV6Zoyzd4JUyOQ

## Install
`npm install moravio-be-coins`

## Usage
```ts
import { getChange, getChangeOrThrow } from 'moravio-be-coins';

getChange(12, [1, 2, 5]); // ✔️ { success: true, change: [5, 5, 2], left: 0 }

getChangeOrThrow(12, [1, 2, 5]); // ✔️ [5, 5, 2]

getChange(12, [5]); // ❌ { success: false, change: [5, 5], left: 2 }

getChangeOrThrow(12, [5]); // ❌ throws 'Unable to get change.'
```

## Run tests
`npm test`

## CI / CD with GitHub Actions
Tests are run after every push on any branch.

The package is auto-published on npm after each GitHub release.

## Thank you 🙂
I'd be very happy to have your feedback on this.