
let num = 0

function addNum() {
  num++
  let score = document.getElementById('score')
  score.innerText = num

}

function addNumFive() {
  num += 5
  let score = document.getElementById('score')
  score.innerText = num
}

function subNum() {
  num--
  let score = document.getElementById('score')
  score.innerText = num
}
function subNumFive() {
  num -= 5
  let score = document.getElementById('score')
  score.innerText = num
}

function resetScore() {
  num = 0
  let score = document.getElementById('score')
  score.innerText = num
}

