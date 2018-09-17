var fs = require('fs');
var data = fs.readFileSync('invStock.json')
var obj = JSON.parse(data)
var prompt = require('readline-sync');
fs.readFile('/Users/apple/javascript/OOPs/invStock.json', 'utf-8', function (err, data) {
    if (err) throw err
})
function stock() {
    var option = prompt.question("Enter 1 to view your stock\nEnter 2 to Add elements in your stock\nEnter 3 to delete an Element in Stock: \t")
    var sum = 0
    switch (option) {
        case "1": console.log(obj);
            break;

        case '2':

            var count = prompt.question("Enter number of stocks: ")
            for (var i = 0; i < count; i++) {
                var name = prompt.question("Enter the stock name: ")
                var numberofshare = prompt.question("Enter the number of share you want to purchace: ")
                var shareprice = prompt.question("Enter the share price: ");

                obj.stock.push({
                    name: name,
                    numberofshare: numberofshare,
                    shareprice: shareprice,

                })

                console.log(sum += (shareprice * numberofshare))
                fs.writeFile('/Users/apple/javascript/OOPs/invStock.json', JSON.stringify(obj), 'utf-8', function (err) {
                    if (err) throw err

                })
                console.log(obj)
            }
            console.log("the total value of the stocks = " + sum)
            console.log(count + " stock(s) added successfully")
            break;

        case '3':
            var del = prompt.question("Enter the Stock Number you want to delete: ")
            delete obj.stock[del]
            console.log(obj)
            fs.writeFile('/Users/apple/javascript/OOPs/invStock.json', JSON.stringify(obj), 'utf-8', function (err) {
                if (err) throw err
                console.log('Stock deleted successfully!')
            })
            break;

    }
}
stock();