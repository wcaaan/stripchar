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
```javascript
// Strip all special characters EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input);

// Example

stripchar.RSExceptUnsAlpNum('ne@w_t#est_id'); // new_test_id
```

```javascript
// Replace all special characters with desired oone EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input);

// Example

stripchar.RSExceptUnsAlpNum('new@test@id', '_'); // new_test_id
```

```javascript
// Strip all special characters EXCEPT alphanumeric

stripchar.RSspecChar(input);

// Example

stripchar.RSspecChar('new@test@id'); // newtestid
```

```javascript
// Replace all special characters with desired one EXCEPT alphanumeric

stripchar.RSspecChar(input);

// Example

stripchar.RSspecChar('new@test@id', '_'); // new_test_id
```

