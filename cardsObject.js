var sort=require('/Users/apple/javascript/OOPs/Mysort.js')
var card = ""
arr = ["diamonds(♦)", "spades(♠)", "hearts(♥)", "club(♣)"]; // array of suits
arr1 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"]; // array of all possible outcomes

function rando(min, max)           // defination of random function
{
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
    var card = (randomItem1 + " " + randomItem)
    player1.push(card)
    

}
var sorter=sort.sorter('A2345678910JQK')
player1.sort(sorter)




for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem1 + " " + randomItem)
    player2.push(card)
    
}
var sorter=sort.sorter('A2345678910JQK')
player2.sort(sorter)


for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem1 + " " + randomItem)
    player3.push(card)

}
var sorter=sort.sorter('A2345678910JQK')
player3.sort(sorter)



for (i = 1; i <= 9; i++) {
    randomNumber = rando(0, arr.length - 1)
    randomItem = arr[randomNumber]
    randomNumber1 = rando(0, arr1.length - 1)
    randomItem1 = arr1[randomNumber1]
    var card = (randomItem1 + " " + randomItem)
    player4.push(card)

}
var sorter=sort.sorter('A2345678910JQK')
player4.sort(sorter)


players.push(player1);          //pushing all individual array to player array.
players.push(player2);
players.push(player3);
players.push(player4);
console.log(players);          // pring the resultant 2-D array