function findWaldo(arr, found) {
   arr.forEach(function(index){
    if (index === "Waldo") {
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
