function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector
}

function nestedTarget() {
  const target = document.querySelector('#nested').querySelector('.target');
  return target
}

// function deepestChild() {
//   let currentChild = array;
//   let next = [];
//   const deepest = document.querySelector('#grand-node').querySelectorAll('currentChild');



//    grand-node is under app


//   while (currentChild) {
//     if (currentChild != null){
//       return currentChild;
//     }
//
//     if (Array.isArray(currentChild)){
//       for (let i=0; i < currentChild.length; i++) {
//         next.push(currentChild[i])
//       }
//
//       currentChild = next.shift();
//
//     }
//
//     return null
//
//   }
//
// }

function increaseRankBy(n) {
  const increaseRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  return parseInt(increaseRank.innerHTML + n)

  // for (let i = 0; i < increaseRank.length; i++) {
  //   return parseInt(increaseRank[i].innerHTML + n);
  // }

}
