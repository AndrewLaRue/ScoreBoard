
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
function addNumTwo() {
  num++
  let score = document.getElementById('scoreTwo')
  score.innerText = num

}

function addNumFiveTwo() {
  num += 5
  let score = document.getElementById('scoreTwo')
  score.innerText = num
}

function subNumTwo() {
  num--
  let score = document.getElementById('scoreTwo')
  score.innerText = num
}
function subNumFiveTwo() {
  num -= 5
  let score = document.getElementById('scoreTwo')
  score.innerText = num
}

function resetScoreTwo() {
  num = 0
  let score = document.getElementById('scoreTwo')
  score.innerText = num
}

