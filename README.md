#morse

A simple Morse code library for node and the browser

![Samuel F.B. Morse](http://i.imgur.com/HHHTQ.jpg)

## install

For use as a CLI:

    npm install -g morse

For use as a library:

    npm install morse

## example usage as a CLI

````
morse -h


morse hello

morse -d --.
````

## example usage as a library

Either use

    <script src="/morse.js"></script>

or

    var morse = require('morse');

and then you can

````javascript
morse.encode('Hello, world.');
// .... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-

morse.decode('');
// HELLO, WORLD.
````

## methods

### morse.encode(str)

Encodes and returns a given string

### morse.decode(str, dichotomic)

Decodes and returns a string or array

`dichotomic` defaults to false. If passed true, it will use a tree-based approach to decode the string or array. If false, a basic iteration of the map is used.

The dichotomic approach looks like this:

![](http://i.imgur.com/Y1bnV.png)

## attributes

### morse.map

An object containing `letter: morse` translations

## license

MIT
