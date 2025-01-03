function foo(x) {
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(-1));  // -1
console.log(foo(0));   // 1
console.log(foo(1));   // 1

//Corrected Code to handle 0 correctly
function fooCorrected(x) {
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else if (x > 0){
    return 1;
  } else {
    return 0; //Explicitly handle 0
  }
}
console.log(fooCorrected(null)); // 0
console.log(fooCorrected(-1));  // -1
console.log(fooCorrected(0));   // 0
console.log(fooCorrected(1));   // 1