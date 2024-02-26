// Q.1-----Loop through all numbers from 1 to 100.

for (let i = 1; i<101; i++) {
    console.log(i)
}

// Q.2------If a number is divisible by 3, log “Fizz.”

for (let i = 1; i<101; i++) {
      if (i % 3 === 0);
    console.log("Fizz")
}

// queueMicrotask.3-------If a number is divisible by 5, log “Buzz.”


for (let i = 1; i<101; i++) {
    if (i % 5 === 0);
  console.log("Buzz")
}

// Q.3-----------If a number is divisible by both 3 and 5, log “Fizz Buzz.”

for (let i = 1; i<101; i++) {
    if (i % 3 === 0 && i % 5 === 0);
  console.log("FizzBuzz")
}

// Q.4---------If a number is not divisible by either 3 or 5, log the number.


for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
  }