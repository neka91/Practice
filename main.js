// Task 1
var A = [7, 87, 9, 31, 19, 23, 15, 11, 4];
console.log(A);

var B = [];

for (k = 0; k <A.length; k++) {
    var z = A[k];

    var isSimple = true;
    for (i = 2; i <=z / 2; i++) {
        if (z % i == 0) {
            isSimple = false;
            break;
        }
    }
    if (isSimple) {
        B.push(z); 
    }
}

console.log(B);


// Task 2
var max = A[0];
var min = A[0];

var indexMax = 0;
var indexMin = 0;

for (m = 0; m < A.length; m++) {
    if (A[m] > max) {
        max = A[m];
        indexMax = m;
    }

    if (A[m] < min) {
        min = A[m];
        indexMin = m;
    }
}

console.log(max);
console.log(min);

// Task 3
var C = [];
for (p = 0; p < A.length; p++) {
    if (A[p] != max && A[p] != min) {
        C.push(A[p]); 
    }
}

console.log(C);

A[indexMax] = min;
A[indexMin] = max;
console.log(A);

for (var w = 0; w < A.length / 2; w++) {
    var elementA = A[w];

    A[w] = A[A.length - 1 - w];
    A[A.length - 1 - w] = elementA;   
}
console.log(A);

// Task 4
A = [9, 4, 9, -1, 4, 23, 11, 4];
min=-1
var count = 0;
for (var index = 0; index < A.length; index++) {
    var element = A[index];
    
    if (Math.abs(element-min)==5) {
        count++     
    }
}
console.log(count);



