## Description
```

stripchar is perhaps the smallest Github Repositor, when you are working with Javascript | Node.js
you can simply replace all special characters from string by using this repo.


```
## Installation
```
npm install stripchar


```
## Require
```
var stripchar = require('stripchar');


```
## Use
```
// Strip all special characters EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input);
```

// Replace all special characters with desired oone EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input);
```

```
// Replace all special characters with desired symbol except small - capital alphabets and numerics

stripchar.replaceWith(input, replaceWith);
```

```
// Strip all special characters and numerics except alphabets

stripchar.stripExceptAlpha(input);
```

```
// Strip all special characters and alphabets except numerics

stripchar.stripExceptNum(input);
```

```
// Strip all special characters except _ underscore, alphabets and numerics

stripchar.stripExceptUns(input);
```

```
// Escape html special characters

stripchar.htmlEscape(input);

List of escape character:
& > < " '
```

```
// Strip html special characters

stripchar.htmlStrip(input);

List of stripped character:
& > < " '
```

```
// Unicode Escaping all special characters

stripchar.unicodeEscape(input);
```

