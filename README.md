## Description:
```

when you are working with Javascript | Node.js you can simply filter, strip or replace special characters,
alphabets and numerics from string or object by using this repository.
```

## Installation:

```javascript
npm install stripchar
```

## Require:
```javascript
var stripchar = require('stripchar').StripChar;
```

## Usage:

```javascript
// Strip all special characters EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input);

// Example

stripchar.RSExceptUnsAlpNum('ne@w_t#est_id_@12'); // new_test_id_12
```

```javascript
// Replace all special characters with desired oone EXCEPT underscore and alphanumeric

stripchar.RSExceptUnsAlpNum(input, replacewith);

// Example

stripchar.RSExceptUnsAlpNum('new@test@id_12', '_'); // new_test_id_12
```


```javascript
// Strip all special characters EXCEPT underscore and alphabet

stripchar.RSExceptUnsAlpha(input);

// Example

stripchar.RSExceptUnsAlpha('ne@w_t#est_id_12'); // new_test_id_12
```

```javascript
// Replace all special characters with desired oone EXCEPT underscore and alphabet

stripchar.RSExceptUnsAlpha(input, replacewith);

// Example

stripchar.RSExceptUnsAlpha('new@test@id_12', '_'); // new_test_id_12
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


## Instructions:

Use the following format of either string or object or else you will get "false" in return.

```javascript

// JSON format
var obj = {"col1": "id_1", "col2": "id_2", "col3": "id_3"};

// String format
var str = 'new_test_id';
```

when using replacing part of function do not not use the following as replacement otherwise it will be ignored automatically.

```javascript

stripchar.RSExceptAlpha('new@test@id@99', 'null'); // return false

stripchar.RSExceptAlpha('new@test@id@99', 'undefined'); // return false
```

## Run Test:

simply type the following command to run the test from CLI.

```javascript
npm test

// OR

mocha
```


## License
Stripchar is free software distributed under the terms of the MIT license.


### Please support this project
Please support the project development, even a small donation can help grow this project!


<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7V57PFMAZHKLA" target="_blank"><img src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"></a>


#### Interested in some new feature?
Is there something new you like to see in this package ?
Please contact me and i'll do my best to implement that in next releases.