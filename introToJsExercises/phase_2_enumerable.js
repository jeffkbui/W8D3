arr = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
}

Array.prototype.myMap = function (callBack) {
  let resArr = [];
  this.myEach((el) => resArr.push(callBack(el)))
  return resArr;
}

Array.prototype.myReduce = function(callBack, initialValue) {
  let acc = initialValue ;
  if (acc === undefined) {
    acc = this.shift() ;
  }
  // let acc = initialValue != undefined ? initialValue : this.shift() ;
  this.myEach((el) => acc = callBack(acc, el)) ;
  return acc ;
}