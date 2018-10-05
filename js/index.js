const num = parseInt(prompt('Eter your number'));
alert('Loop ' + calcFib(num));
alert('Array ' + arrFib(num));
alert("Recurtion method: " + fibRec(num));

function calcFib(num) {
    let first = 1;
    let second = 1;
    for (let i = 3; i <= num; i++) {
        const next = first + second;
        first = second;
        second = next;
    }
    return second;
}

function arrFib(num) {
    let fibArr = [1, 1];
    for (let i = 2; i < num; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr.pop();
}

function fibRec (n) {
  if (n <= 2) { 
    return 1;
  } 
  else {
     return fibRec(n - 1)+ fibRec(n - 2);
  }
}