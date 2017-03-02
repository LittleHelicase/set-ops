# Set-ops

Implementation of standard set operations for ES6 sets.

# Installation

Via npm

```
npm i set-ops
```

Requires a ES6 compliant JS installation.

# Usage

It exposes the 3 standard operations for sets.

```
var {union, intersection, difference} = require('set-ops')

union(new Set([1,3]), new Set([2,3])) // = 1, 2, 3
intersection(new Set([1,3]), new Set([2,3])) // = 3
difference(new Set([1,3]), new Set([2,3])) // = 1
```

