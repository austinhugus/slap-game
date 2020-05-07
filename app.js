let modifier = 0
let target = {
    name: "Hank",
    hits: 0,
    health: 100,
    items: []
}

var items = {
    fire: {
        name: 'Fire',
        modifier: 2,
        descrption: 'IT BURNS!'
    },
    ice: {
        name: 'Ice',
        modifier: 3,
        descrption: 'IT\'S COLD!'
    },
    wind: {
        name: 'Wind',
        modifier: 4,
        descrption: 'IT\'S BREEZY!'
    }
}

function giveFire() {
    target.items.push(items.fire)
    addMods()
}
function giveIce() {
    target.items.push(items.ice)
    addMods()
}
function giveWind() {
    target.items.push(items.wind)
    addMods()
}
function addMods() {
    let sum = 0
    target.items.forEach(i => sum += i.modifier)
    modifier += sum
    console.log(sum)
    return sum

}

update()
function slap() {
    target.health -= 1 + modifier
    target.hits++
    update()
}
function kick() {
    target.health -= 10
    target.hits++
    update()
} function punch() {
    target.health -= 5
    target.hits++
    update()
}

function update() {
    document.getElementById("health").innerText = target.health.toString()
    document.getElementById("hits").innerText = target.hits.toString()
    document.getElementById("target").innerText = target.name
}
