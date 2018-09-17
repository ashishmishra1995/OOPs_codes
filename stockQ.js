class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class Queue {
    constructor() {
        this.tail = null;
        this.head = null;
       
    }


    enqueue(item) {
        let node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }


    dequeue() {
        if (!this.head) {
            return 'No item'
        } else {
            let itemToPop = this.head
            this.head = this.head.next
            return itemToPop
        }
    }

    len() {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) {
            counter++
            current = current.next
        }
        return counter;
    }

    peek() {
        if (this.head) {
            return this.head.data
        } else {
            return 'Empty'
        }
    }

    isEmpty() {
        return this.len() < 1;
    }

    printQ() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}
var q = new Queue();
var prompt = require('prompt-sync')();
var d = new Date();
class Transaction {

    purchase(count) {

        

        for (let index = 0; index < count; index++) {

            var name = prompt('Enter Company name :');
            var shares = prompt('Enter no of Shares to buy :');
            var price = prompt('Enter price at which stock need to purchase :');
            var date= (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear())
            var time= (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())


            let user = {
                company: name,
                shares: shares,
                price: price,
                date: date,
                time: time
            };

            console.log('Successfully purchased the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

            q.enqueue(user)
        }
    }

    sell(count) {
        for (let index = 0; index < count; index++) {
            // var erase = prompt('Enter Stock name to be sold :');
            var res = q.dequeue();
            console.log(res);
        }
    }
    stockList() {
        q.printQ();
    }
}
var trans = new Transaction();
var count = prompt('Enter no of stocks to be purchased : ')
trans.purchase(count);
trans.stockList();
count = prompt('Enter no of stocks to be sold : ')
trans.sell(count);
trans.stockList();