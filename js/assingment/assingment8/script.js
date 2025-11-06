const promise = Promise.resolve('Hello, ');

promise
  .then(message => message + 'World!')
  .then(finalMessage => console.log(finalMessage));
