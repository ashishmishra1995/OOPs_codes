var fs = require('fs')
var prompt = require('prompt-sync')();
var data = fs.readFileSync('/Users/apple/javascript/OOPs/stockComp.json');//, 'utf-8', function(err,stock)
arrayOfObjects = JSON.parse(data);
class Account {
    constructor(arrayOfObjects, totalPrice, amount, report) {
        this.arrayOfObjects;
        this.totalPrice = 1;
        this.amount = 0;
        this.report = [];
    }

    buy() {
        var num = prompt("Please enter the total number of stocks purchased: ");
        for (var i = 0; i < num; i++) {
            var Name = prompt("Please enter the item purchased: ");
            var number = prompt("Please enter the number of items purchased: ");
            var price = prompt("Please enter the price per item: ");
            arrayOfObjects.stock.push({
                Stockname: Name,
                Number: number,
                Price: price
            })
            totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of all the stocks is " + JSON.stringify(totalPrice));
            console.log(arrayOfObjects);

            fs.writeFile('/Users/apple/javascript/OOPs/stockComp.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!')
            })
        }
    }

    sell() {
        var del = prompt("Please enter the index of item you want to purchase: ");
        delete arrayOfObjects.stock[del];
        fs.writeFile('/Users/apple/javascript/OOPs/stockComp.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        })
    }

    value() {
        for (var i = 0; i < arrayOfObjects.stock.length; i++) {
            amount = Number(arrayOfObjects.stock[i].Price) + Number(amount);
        }
        console.log("The total price of the stocks is: " + amount);
    }
    accountReport() {
        console.log("a");
        for (var j = 0; j < arrayOfObjects.stock.length; j++) {
            report.push(arrayOfObjects.stock[j]);
        }
        console.log("The report of your stock is: " + JSON.stringify(report));
    }
}
var s = new Account();
console.log("1: Buy stock");
console.log("2: Value of the stock");
console.log("3: Sell stock");
console.log("4: Stock Report");
console.log("5: Exit");
var choice = prompt("Please enter your choice: ");
var arrayOfObjects, totalPrice = 1, amount = 0, report = [];
// fs.readFile('/home/d/Desktop/labsfirst/oops/main/stock5.json', 'utf-8', function(err,stock){
//     if (err) throw err
// arrayOfObjects = JSON.parse(stock);
switch (parseInt(choice)) {
    case 1:
        s.buy();
        break;
    case 2:
        s.value();
        break;

    case 3:
        s.sell();
        break;

    case 4:
        s.accountReport();
        break;

    case 5:
        console.log("Exit!!");
        break;

    default:
        console.log("Invalid Input!");
        break;
}