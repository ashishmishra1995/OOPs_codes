// Namespace
var EX = {};

/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function () {
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function () {
	var head = null;
	var size = null;

	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
	this.pushToStack = function (item) {
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;
		if (size < 1 && head === null) {
			head = node;
			head.next = null;
			size = 1;
		} else {
			var current = head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}

	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
	this.popFromStack = function () {
		var current = head;
		if (size === 0) {
			return;
		}
		if (size === 1) {
			head = null;
			size = 0;
			return current;
		}
		var prev = current;
		while (current.next !== null) {
			prev = current;
			current = current;
		}
		prev.next = null;
		size -= 1;
		return current.next;
	}

	// Function to check if stack is empty
	this.isStackEmpty = function () {
		return (size < 1) ? true : false;
	}

	// Function to get top item of the stack
	this.stackTop = function () {
		var current = head;
		if (size > 0 && head !== null) {
			while (current.next !== null) {
				current = current.next;
			}
			return current.item;
		} else {
			console.log("There is no item in the stack");
			return null;
		}
	}

	this.printStack = function () {
		var current = head;
		while (current.next !== null) {
			console.log(current.item);
			current = current.next;
		}
		console.log(current.item);
	}

}
var stack = new EX.LinkedStack();
var prompt = require('prompt-sync')();
class StockAccount {
	buy(count) {
		for (var i = 0; i < count; i++) {
			var name = prompt('enter the name: ');
			var number = prompt('enter the number of share: ');
			var price = prompt('enter the price: ');
			var customer = {
				name: name,
				number: number,
				price: price
			}
			stack.pushToStack(customer);
			//console.log(l.printList());
			console.log("successfully purchase the item");
			var date = new Date();
			var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
			console.log("the time of buy transaction is: " + time);
		}
	}
	sell(count) {
		for (var i = 0; i < count; i++) {
			// var num = prompt('enter the name of item to be sold: ');
			stack.popFromStack();

		}
		var date = new Date();
		var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		console.log("the time of sell transaction is: " + time);
	}
	stockReport() {
		/// l.printList();
		stack.printStack();
	}
}
/*var stock = new StockAccount();
var count = prompt("enter the number of stocks to be purchased: ");
stock.buy(count);
stock.stockReport();
var count = prompt("enter the number of stocks to be sold: ");
stock.sell(count);
//stock.stockReport();
stack.printStack();*/

var stock = new StockAccount();
while (1) {
	console.log('1.Buy Stocks')
	console.log('2.Sell Stocks')
	console.log('3.Print Stock Report')
	console.log('4.Exit')
	var choice = prompt('What do u want to do ?')
	switch (choice) {
		case '1': var count = prompt("enter the number of stocks to be purchased: ");
			stock.buy(count);
			break;
		case '2': var count = prompt("enter the number of stocks to be sold: ");
			stock.sell(count)
			break;

		case '3': stack.printStack();
	}
}