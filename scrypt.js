/// задание 1
let a = "";
for (let i = 20; i <= 30; i = i + 0.5) {
  a += i + " ";
}
console.log(a);

/// задание 2
let b = 27;
for (let i = 10; i <= 100; i = i + 10) {
  console.log(i * b);
}

/// задание 3
let N = 10;
for (let a = 1; a <= 100; a++) {
  if (N >= a ** 2) {
    console.log(a);
  }
}

/// задание 4
simpleNumbers: for (let i = 2; i <= 20; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue simpleNumbers;
  }
  console.log(i);
}

/// задание 5
var n = prompt("Введите число n", 0);
if (n != null) {
  var x = 0;
  var n1 = 0;
  do {
    x++;
    n1 = Math.pow(3, x);
  } while (n1 < n);
  if (n1 == n) alert("Число n = 3 в степени " + x);
  else alert("Число n не является степенью числа 3");
}
