function counter() {
  let count = 0; // variable stored in closure

  return function() {
    count++;
    console.log(count);
  };
}

const incrementCounter = counter();

incrementCounter(); // 1
incrementCounter(); // 2
