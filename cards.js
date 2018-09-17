var card = ""
arr = ["diamonds(♦)", "spades(♠)", "hearts(♥)", "club(♣)"]; // array of suits
arr1 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]; // array of all possible outcomes

function rando(min, max) {
    var ofset = min;
    var range = (max - min) + 1
    var randomNumber = Math.floor(Math.random() * range) + ofset;
    return randomNumber;
}
var players = [];
var player1 = [];

var player2 = [];

var player3 = [];

var player4 = [];

for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player1.push(card)

}



for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player2.push(card)

}


for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player3.push(card)

}


for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem + " " + randomItem1)
    player4.push(card)

}

players.push(player1);
players.push(player2);
players.push(player3);
players.push(player4);
console.log(players);