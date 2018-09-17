var read = require('readline-sync');
var fs = require('fs');
var data = fs.readFileSync('stockLL.json')
var obj = JSON.parse(data)
fs.readFile('/Users/apple/javascript/OOPs/stockLL.json', 'utf-8', function (err, data) {
    if (err) throw err
})

class StockAccount {
    constructor(name, no_of_share, share_price) {
        this.name = name;
        this.no_of_share = no_of_share;
        this.share_price = share_price;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getNumberOfShare() {
        return this.no_of_share;
    }
    setNumberOfShare(no_of_share) {
        return this.no_of_share=no_of_share;
    }
    getSharePrice() {
        return this.share_price;
    }
    setSharePrice(share_price) {
        return this.share_price=share_price;
    }
}

function stockAccount() {
    var stockac = new StockAccount();
    var count = read.question("Enter the number of stocks: ");

    for (var i = 0; i < count; i++) {
        var name = read.question("Enter name of the share: ");
        var no_of_share = read.question("Enter number of shares: ");
        var share_price = read.question("Enter the share price: ");

        
        
        
            stockac.setName(name),
        stockac.setNumberOfShare(no_of_share),
        stockac.setSharePrice(share_price)

        
        fs.writeFile('/Users/apple/javascript/OOPs/stockLL.json', JSON.stringify(stockac), 'utf-8', function (err) {
            if (err) throw err
    
        })
    }
    
}
stockAccount();