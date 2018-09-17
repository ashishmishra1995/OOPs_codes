class Stock{
    constructor(stockname,number_share,share_price)
    {
        this.stockname=stockname;
        this.number_share=number_share;
        this.share_price=share_price;
    }
}

var stock1=new Stock("AJIO",50,1800)
var stock2=new Stock("FUTURE GROUP",40,3200)
var stock3=new Stock("PEPE JEANS CO.",22,2400)
var stock4=new Stock("TOMY HILFIGER",60,1800)
var stock5=new Stock("ADIDAS",45,2600)
console.log(stock1);
console.log(stock2);
console.log(stock3)
console.log(stock4)
console.log(stock5)


var first=stock1.number_share*stock1.share_price;
var second=stock2.number_share*stock2.share_price;
var third=stock3.number_share*stock3.share_price;
var fourth=stock4.number_share*stock4.share_price;
var fifth=stock5.number_share*stock5.share_price;

console.log("\nThe total share price of "+stock1.stockname+" is : " +first);
console.log("The total share price of "+stock2.stockname+" is : " +second);
console.log("The total share price of "+stock3.stockname+" is : " +third);
console.log("The total share price of "+stock4.stockname+" is : " +fourth);
console.log("The total share price of "+stock5.stockname+" is : " +fifth);
var total_value=first+second+third+fourth+fifth;
console.log("\nThe Total Share is : "+total_value)