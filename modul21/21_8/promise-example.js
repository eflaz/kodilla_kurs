const timeout = new Promise((resolve, reject) => {
  setTimeout(() => resolve("timeout"), 1000);
});

timeout.then(data => console.log(data));
console.log("koniec wczytywania skryptu");