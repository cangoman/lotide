# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cangoman/lotide`

**Require it:**

`const _ = require('@cangoman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `countLetters(string)`: returns an object with the count of every character in the string.
  * `countOnly(allItems, itemsToCount)`: for an array `allItems` returns the count of elements set to `true` in `itemsToCount`.
  * `eqArrays(array1, array1)`: returns true if arrays are equal.
  * `eqObjects(object1, object2)`: returns true if objects are equal.
  * `findKey(object, callback)` returns the first key in `object` for which the `callback` returns a truthy value.
  * `findKeyByValue(object, value)`: returns the first key which contains the given `value`. If no key is found, returns `undefined`.
  * `flatten(array)` returns a flattened version of `array`. Uses recursion to deal with unknown levels of nesting.
  * `head(array)`: returns the first element (head) of an array. Returns an empty array if `array` is empty. Returns undefined if `array` is not an array.
  * `letterPositions(string)`: returns an object with the characters of the string as keys, and an array for each specifying their position in `string`.
  * `map(array, callback)`: returns a new array based on the results of the callback function. 
  * `middle(array)`: returns the an array with the middle element of `array` if `array.length` is odd or the middle 2 elements if `array.length` is even.
  * `tail(array)`: returns an array consisting of all but the first element of `array`. Returns an empty array if `array` is empty.
  * `takeUntil(array, callback)`: Returns an array with the elements of the array from the beginnig until the callback returns a truthy value. 
  * `without(array, itemsToRemove)`: returns an array with the elements of the original array, minus the elements included in `itemsToRemove`
