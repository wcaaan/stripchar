## Description
```

stripchar is perhaps the smallest Github Repositor, when you are working with Javascript | Node.js
you can simply replace all special characters from string by using this repo.
```

## Installation

```javascript
npm install stripchar
```


## Require
```javascript
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

stripchar.RSExceptUnsAlpNum(input, replacewith);

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

stripchar.RSspecChar(input, replacewith);

// Example

stripchar.RSspecChar('new@test@id', '_'); // new_test_id
```

```javascript
// Strip everything EXCEPT numerics

stripchar.RSExceptNum(input);

// Example

stripchar.RSExceptNum('new@test@id_99'); // 99
```

```javascript
// Replace everything with desired character EXCEPT numerics

stripchar.RSExceptNum(input, replacewith);

// Example

stripchar.RSExceptNum('new@test@id@99', '_'); // ____________99
```

```javascript
// Strip everything EXCEPT alphabets

stripchar.RSExceptAlpha(input);

// Example

stripchar.RSExceptAlpha('new@test@id_99'); // newtestid
```

```javascript
// Replace everything with desired character EXCEPT alphabets

stripchar.RSExceptAlpha(input, replacewith);

// Example

stripchar.RSExceptAlpha('new@test@id@99', '#'); // new#test#id###
```