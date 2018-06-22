# code-golf

>   My code golf solutions

## Operators

-   remove whitespace after operators when possible
-   bitwise or `|`
    -   `number|0` equivalent to `Math.trunc(number)`
-   bitwise not `~`
    -   sets number to `-(number+1)`, so can be used with functions that return -1 if a 0 return is needed
    -   coerces non-numbers to `-1`
    -   use with `search()`
-   bitwise xor `^`
    -   replace `!=` with `^`
-   bracket operator `[]`
    ```js
    Object[m='method'](args) // first method/property call
    Object[m](args)          // subsequent calls
    ```
<table>
<thead>
<tr>
<th>length of method/property</th>
<th>minimum calls</th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>6</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>3</td>
</tr>
<tr>
<td>8+</td>
<td>2</td>
</tr>
</tbody>
</table>

-   comma `,`
    -   replace curly braces in conditionals and loops with commas
-   power `**`
    -   `a**b` is equivalent to `Math.pow(a,b)`
-   spread `...`
    -   saves bytes when no callback or element is needed

## Loops

-   for, for in , for of
    -   reverse loops to remove expressions
        ```js
        for (a=0;a<x.length;a++) // before
        for (a=b.length;a--;)    // after
        ```
    -   `[...array]` use spread operator when possible

## Methods
-   template literals instead of parentheses when possible
-   `isFinite()`
    -   `1/number` to check instead
-   `isNaN()`
    -   `number!=number` instead of isNaN(number)
-   `Math.pow()`
    -   `**` operator
-   `Math.random()`
    -   `new Date & 1` == `Math.random() < .5`
    -   `new Date % 330` == `Math.floor(Math.random()*330)`
-   `Math.trunc()`, `Math.round()`
    -   `|0` bitwise or instead
-   `RegExp()`
    -   `eval()` instead
-   array
    -   use coercion `''+array` instead of `join(',')` or `join()`
    -   spread operator instead of `forEach()` when possible
-   string
    -   `search()` instead of `indexOf()` unless regex is longer than string
    -   `slice()` is always shorter than substring, can `slice(-n)` to get the last n elements
    -   `split()` use spread operator when splitting over every element

## Variables

-   use type specific methods to test type
<table>
<tr>
<th>type</th>
<th>test</th>
</tr>
<tr>
<td>array</td>
<td>pop()</td>
</tr>
<tr>
<td>function</td>
<td>call()</td>
</tr>
<tr>
<td>number</td>
<td>toFixed()</td>
</tr>
<tr>
<td>string</td>
<td>big()</td>
</tr>
<tr>
<td>textNode</td>
<td>data()</td>
</tr>
</table>

-   initialize variables in parameters of functions or loops
-   `this` or `self` instead of `window`
-   array
    -   `map()` instead of `reduce()` when possible
    -   use elision to put values in certain indices
-   boolean
    -   `!0` for true and `!1` for false if you need literal boolean values, or else use 1 and 0
    -   `!!` to change a value to true or `!` for false
-   function
    -   omit parentheses on `new` calls without arguments
-   Infinity
    -   `1/0` instead of `Infinity`
-   number
    -   `+number` instead of parsing to coerce to float or integer
    -   `AeB` instead of numbers with many trailing zeros
    -   `number|0` to cast to integer, equivalent to `Math.trunc(number)`

## Regex

-   `\b` for word *boundaries*
-   `\d` instead of `[0-9]`
-   `\w` instead of `[A-Za-z0-9_]`
