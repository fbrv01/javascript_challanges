// Fibonacci: The Fibonacci Sequence is a sequence of numbers whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc).
// Using 0 and 1 as the starting values, create a function that prints an array containing all of the Fibonacci numbers up to 10000

function* fib (a, b)
{ let t
  while (true)
  { yield a
    t = a
    a = b
    b = t + a
  }
}

function* fibs (limit)
{ for (const n of fib(0, 1))
    if (n < limit)
      yield n
    else
      return
}

console.log(Array.from(fibs(10000)))

// I really like Rahni1's solution:

// Each num is a sum of the two preceeding numbers
function fib(n) {

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    console.log(result) 
  
  }
  fib(8)
