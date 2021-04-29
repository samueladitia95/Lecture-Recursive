// Function
// Recursive Basic
// Factorial
// Fibonacci
// Why Recursive

//? Apa itu Function?
//? Nulis logic sekali, dipake berkali-kali
//? Salah satu cara untuk mengorganisir program ke dalam block-block

//! Declare function
function fungsiContoh(param) {
  //* Logic function
  //* Output -> return(opsional)
}

/*
5
4
3
2
1
*/

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// }

// // countDown(5) //! invoke function

// // 5 -> 5 + 4 + 3 + 2 + 1

// console.log(sum(5));

// function fungsiRandom() {
//   console.log("ini fungsi random"); //! Langkah 2 -> Langkah 4 -> Langkah 6
//   fungsiRandom(); //! Langkah 3 -> Langkah 5 -> Langkah 7
// }

// fungsiRandom(); //! Langkah 1

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

function countDownRecursive(num) {
  //* Base Case
  if (num === 0) {
    return;
  }

  //* Logic
  console.log(`sebelum ${num}`);

  //* Revursive
  countDownRecursive(num - 1);

  //* Logic
  console.log(`sesudah ${num}`);
}

/*
!countDownRecursive(5) 
    !countDownRecursive(4) 
        !countDownRecursive(3) 
            !countDownRecursive(2) 
                !countDownRecursive(1) 
                    !countDownRecursive(0) -> BERHENTI
                !console.log(1)
            !console.log(2)
        !console.log(3)
    !console.log(4)
!console.log(5)
*/

// countDownRecursive(5);

// function sum(num) {
//   let total = 0;
//   for (let i = num; i > 0; i--) {
//     total += i;
//   }
//   return total;
// }

// function factorial(num) {
//   //* Base Case
//   if (num < 1) {
//     return 1;
//   }

//   //* recursive
//   const result = num * factorial(num - 1);
//   return result;
// }

// console.log(factorial(5));

/*
!factorial(5) -> 5 * 24
    !factorial(4) -> 4 * 6
        !factorial(3) -> 3 * 2
            !factorial(2) -> 2 * 1
                !factorial(1) -> 1 * 1
                    !factorial(0) -> 1
*/

/* 
fibonacci-0 = 0
fibonacci-1 = 1
fibonacci-2 = 0 + 1 = 1
fibonacci-3 = 1 + 1 = 2
fibonacci-4 = 2 + 1 = 3
fibonacci-5 = 3 + 2 = 5
fibonacci-6 = 5 + 3 = 8
fibonacci-7 = 8 + 5 = 13
fibonacci-8 = 13 + 8 = 21
fibonacci-9 = 21 +13 = 34
*/

// function fibonacci(num) {
//   let arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[num];
// }

// function fibonacciRecursive(num) {
//   if (num < 2) {
//     return num;
//   }

//   const result = fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
//   return result;
// }

// console.log(fibonacciRecursive(3));

// function toRoman() {
//   const kamus = [
//     {angka: 5, roman: "V"}
//   ]

//   //! Looping -> kamus
//   X + I + I + I
// }
