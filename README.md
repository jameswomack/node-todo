Comment TODO Parser collects the TODOs & FIXMEs 
found throughout your project & consolidates them
into a Markdown file.

## Supported comment styles
```js
// TODO example todo
// FIXME example todo
# TODO .coffee .rb comments

/* TODO example todo
 * TODO example todo
 */

/* FIXME example todo
 * FIXME example todo
 */

// TODO: example todo

// FIXME - example todo

// Matches are case insensitive so this works too
// todo another todo
# FixMe pretty please
```

## Output
```
#TODOS

##todo.foo
1 A valid js comment
2 .coffee, .rb, .py style comments
3 Do the dew
4 Dew to do

##dir/todo.js
1 Second todo.
```
