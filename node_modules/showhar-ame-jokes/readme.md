# showhar-ame-jokes (Persian dad jokes)

A funny joke generate NPM package including handreds of persian dad jokes tweeted by persian people.
Install
```code
npm i showhar-ame-jokes
```

After installation, invoke the joke generator function and pass a a spicific 12 bytes id or a number 1-10.
Example:
```javascript
// Import the jokesGenerator function:
const jokesGenerator = require('showhar-ame-jokes')
// Invoke the function and pass a number as an argument and store it in a variable:
const arrayOfJokes = jokesGenerator(2)
// Log the result into the console 
console.log(arrayOfJokes)
```

Result:
```
[{
  "_id": {
    "$oid": "644ead287803a3117a0a6ca7"
  },
  "value": "بزغاله‌ها که ناراحت میشن صداشون بُزغالود میشه",
  "__v": 0,
  "createdAt": {
    "$date": {
      "$numberLong": "1682877736688"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1682877736688"
    }
  }
},{
  "_id": {
    "$oid": "644ead287803a3117a0a6ca8"
  },
  "value": "وقتی یه کشور تعجب میکنه میگه شهرام!",
  "__v": 0,
  "createdAt": {
    "$date": {
      "$numberLong": "1682877736689"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1682877736689"
    }
  }
}]
```


Check out the API equivalent to this package:
[Jokes-API](https://github.com/rumiani/jokes-api)