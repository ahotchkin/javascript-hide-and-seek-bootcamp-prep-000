function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);
  return firstSelector
}

function nestedTarget() {
  const target = document.querySelector('#nested').querySelector('.target');
  return target
}

function deepestChild() {

  const deepest = document.querySelector('#grand-node').querySelectorAll('*');

  return deepest[deepest.length - 1]

}


function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list');

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n);
  }

  return rank

}
