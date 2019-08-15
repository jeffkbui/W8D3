Array.prototype.bubbleSort = function () {
  let sorted = false ;

  while (!sorted) {
    sorted = true ;
    for (let i = 0; i < this.length - 1; i ++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
          [this[i], this[j]] = [this[j], this[i]] ;
          sorted = false ;
        }
      }
    }
  }
  return this;
}