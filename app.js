let modifier = 0;
let target = {
  name: "Hank",
  hits: 0,
  health: 100,
  items: [],
};

var items = {
  fire: {
    name: "Fire",
    modifier: 2,
    descrption: "IT BURNS!",
  },
  ice: {
    name: "Ice",
    modifier: 3,
    descrption: "IT'S COLD!",
  },
  wind: {
    name: "Wind",
    modifier: 4,
    descrption: "IT'S BREEZY!",
  },
};

function giveFire() {
  target.items.push(items.fire);
  addMods();
}
function giveIce() {
  target.items.push(items.ice);
  addMods();
}
function giveWind() {
  target.items.push(items.wind);
  addMods();
}
function addMods() {
  let sum = 0;
  target.items.forEach((i) => (sum += i.modifier));
  modifier = sum;
  console.log(sum);
  return sum;
}

function gameOver() {
  // when health <= 0
  // disable buttons
  if (target.health <= 0) {
    target.health = 0;
    document.getElementById("slap-btn").classList.add("d-none");
    document.getElementById("kick-btn").classList.add("d-none");
    document.getElementById("punch-btn").classList.add("d-none");
  }
  update();
}

function reset() {
  target.health = 100;
  target.hits = 0;
  target.items.length = 0;
  modifier = 0;
  document.getElementById("slap-btn").classList.remove("d-none");
  document.getElementById("kick-btn").classList.remove("d-none");
  document.getElementById("punch-btn").classList.remove("d-none");
  update();
}

update();
function slap() {
  target.health -= 1 + modifier;
  target.hits++;
  gameOver();
  update();
}
function kick() {
  target.health -= 10 + modifier;
  target.hits++;
  gameOver();
  update();
}
function punch() {
  target.health -= 5 + modifier;
  target.hits++;
  update();
}

function update() {
  document.getElementById("health").innerText = target.health.toString();
  document.getElementById("hits").innerText = target.hits.toString();
  document.getElementById("target").innerText = target.name;

  let template = /*html*/ `
  <div 
            class="progress-bar"
            role="progressbar"
            style="width: ${target.health}%;"
            aria-valuenow="${target.health}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            ${target.health}%
          </div>
          `;
  document.getElementById("progress-card").innerHTML = template;
}
