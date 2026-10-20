/*
 * AltSchool Assignment - Part B
 * LeetCode-Style Challenges */ 
 
 
// Answer to Problem 1
 
 function deepEqual(objA, objB) {
  if (objA === objB) return true

  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) return false

    if (!deepEqual(objA[key], objB[key])) return false
  }

  return true
}

console.log(deepEqual( {a: 1, b: { c: 2} } , {a: 1, b: { c: 2} }))
console.log(deepEqual( {a: 1, b: { c: 2} } , {a: 1, b: { c: 3} }))
console.log(deepEqual({a:1}, {a:1, b:2 } ) )



// Answer to Problem 2 


function diffObjects(oldObj, newObj) {
  const added = {}
  const removed = {}
  const changed = {}

  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      }
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) {
      removed[key] = oldObj[key]
    }
  }

  return { added, removed, changed }
}

console.log(JSON.stringify(
  diffObjects(
    {
      name: "Setemi",
      role: "Engineer",
      country: "Jamaica"
    },
    {
      name: "Setemi",
      role: "Senior Engineer",
      city: "Kingston"
    }
  ))
);


// Answer to Problem 3 



function deepFreeze(obj) {
  if (
    obj === null ||
    typeof obj !== "object" ||
    Object.isFrozen(obj)
  ) {
    return obj
  }

  Object.freeze(obj)

  for (const value of Object.values(obj)) {
    deepFreeze(value)
  }

  return obj
}

const config = deepFreeze({
  api: {
    baseUrl: "https://x.com",
    retries: 3
  },
  debug: false
});

config.api.baseUrl = "https://changed.com"
config.debug = true

console.log(config.api.baseUrl, config.debug)
console.log(Object.isFrozen(config.api))



// Answer to Problem 4 

function createCounter() {
  let count = 0

  return {
    increment() {
      count++
    },

    decrement() {
      count--
    },

    get value() {
      return count
    }
  }
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.decrement()

console.log(counter.value)
console.log(counter.count)




// Answer to Problem 5 

function validateSchema(obj, schema) {
  const errors = []

  for (const [key, expectedType] of Object.entries(schema)) {
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== expectedType) {
      errors.push(
        `${key}: expected ${expectedType}, got ${typeof obj[key]}`
      )
    }
  }

  return errors
}

const schema = {
  name: "string",
  age: "number",
  isAdmin: "boolean"
}

console.log(
  validateSchema(
    { name: "Ada", age: 21, isAdmin: false },
    schema
  )
)

console.log(
  validateSchema(
    { name: "Ada", age: "21" },
    schema
  )
)