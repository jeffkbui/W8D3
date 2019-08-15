

// function uniq(arr) {
//   let uniqHash = {} ;
//   let uniqArr = [] ;
//     for(let i = 0; i < arr.length; i++) {
//       if (!(arr[i] in uniqHash)) {
//         uniqHash[arr[i]] = 1 ;
//       }
//       else {
//         uniqHash[arr[i]] ++ ;
//       }
//     }
//     for (let key in uniqHash) {
//       if (uniqHash[key] === 1) {
//         uniqArr.push(key) ;
//       }
//     }

//   return uniqArr ;
// }

Array.prototype.uniq = function () {
  let uniqHash = {};
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!(this[i] in uniqHash)) {
      uniqHash[this[i]] = 1;
    }
    else {
      uniqHash[this[i]]++;
    }
  }
  for (let key in uniqHash) {
    if (uniqHash[key] === 1) {
      uniqArr.push(key);
    }
  }

  return uniqArr;
}

let arr = [1, 1, 2, 2, 3, 3, 4]
let twoSumArr = [1, -1, 2, -2, 3, -3, -1, 3, -2]

Array.prototype.twoSum = function () {
  let complimentHash = {} ;
  let compliment ;
  let resArr = [] ;
  for(let i = 0; i < this.length; i++) {
    compliment = 0 - (this[i]) ;
    if (compliment in complimentHash) {
      resArr.push([complimentHash[compliment], i]) ;
      complimentHash[this[i]] = i ;
    }
    else {
      complimentHash[this[i]] = i ;
    }
  }
  return resArr ;
}

Array.prototype.transpose = function () {
  let transposed = [] ;

  for(let i = 0; i < this.length; i ++) {
    transposed.push([]) ;
    for(let j = 0; j < this[i].length; j ++) {
      transposed[i].push(this[j][i]) ;
    }
  }
  return transposed;
}

arr = [ 
  [1,2,3],
  [4,5,6],
  [7,8,9]
] ;

