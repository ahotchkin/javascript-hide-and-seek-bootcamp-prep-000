function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector
}

function nestedTarget() {
  const target = document.querySelector('#nested').querySelector('.target');
  return target
}

function deepestChild() {
  let currentChild = array;
  let next = [];
  const deepest = document.getElementById('app').querySelectorAll('div#grand-node');

  return deepest

}



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
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list');

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n);
  }

  return rank

}
