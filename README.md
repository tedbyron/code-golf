# golf

>   My code golf solutions

## Stuff to remember

### Brackets

```js
Object[m='method'](args) // first method/property call
Object[m](args)          // subsequent calls
```

| length of method/property | minimum calls |
| ------------------------- | ------------- |
| 1                         | ∞             |
| 2                         | ∞             |
| 3                         | 7             |
| 4                         | 4             |
| 5                         | 3             |
| 6                         | 3             |
| 7                         | 3             |
| 8+                        | 2             |

### Operators

-   bitwise or
    -   can round toward zero with a zero `|0`
-   bitwise not
    -   sets expression to the right to `-(number+1)`, so can be used with functions that return -1 if a 0 return is needed

### Loops

-   for
    -   brackets can be replaced with commas between statements

### Methods

-   array
    -   `join()`
        -   use template literals instead of parentheses to save two bytes
-   isNaN()
    -   use `number!=number` instead of isNaN(number)
-   Math.random()
    -   `new Date & 1` == `Math.random() < 0.5`
    -   `new Date % 330` == `Math.floor(Math.random()*330)`
-   string
    -   `slice` is always shorter than substring
    -   `split` with numbers instead of quotes to save two bytes

### Variables

-   initialize variables in parameters of functions or loops
-   use `this` or `self` instead of `window`
-   array
    -   prefer `map()` over `reduce()`
-   boolean
    -   use `!0` for true and `!1` for false if you need literal boolean values, or else use 1 and 0
-   number
    -   `+number` instead of parsing to get cast to float or int
