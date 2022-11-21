# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jamesraymondbrown/lotide`

**Require it:**

`const _ = require('@jamesraymondbrown/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: verifies that two arrays are the same.
* `assertEqual(actual, expected)`: verifies that two strings or numbers are the same.
* `assertObjectsEqual(actual, expected)`: verifies that two objects are the same.
* `countLetters(string)`: counts how many times each letter occurs in a string.
* `countOnly(allItems, itemsToCount)`: counts how many times a specific string appears in an array of strings.
* `eqArrays(array1, array2)`: helps assertArraysEqual determine if two arrays are equal.
* `eqObjects(object1, object2)`: helps assertObjectsEqual determine if two arrays are equal.
* `findKey(object, callback)`: finds the key in an object corresponding to the provided callback.
* `findKeyByValue(objectToCheck, Value)`: Finds the key corresponding to a specific object value.
* `head(array)`: returns the first value in an array.
* `letterPositions(string)`: redurns the index where each letter appears in a given string.
* `map(array, callback)`: applies a callback to all elements of a provided array, and then returns a new array with those results.
* `reverse(array)`: returns a reversed version of an inputted array.
* `tail(array)`: provides all elements in an array after index 0.
* `middle(array)`: returns the middle value(s) in a provided array.
* `takeUntil(array, callback)`: examines an array and makes a copy, containing the array's contents up to the point that the callback perameter is met
* `without(source, valuesToRemove)`: Removes specified values from an array



