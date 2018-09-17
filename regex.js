var fs=require('fs');
var read=require('readline-sync');
var str = (fs.readFileSync('read.txt')).toString();

var date= new Date();

var name=read.question("Enter your name: ");
var name_regex= /^[a-zA-Z ]{2,30}$/g;        //validation to take input for only alphabets
if(!name.match(name_regex))
{
    console.log("Invalid name input")
    name=read.question("Please enter a valid name: ");
}

var fname=read.question("Enter your full name: ");
var fname_regex = /^[a-zA-Z ]{2,30}$/g;      //validation to take input for only alphabets
if(!fname.match(fname_regex))
{
    console.log("Invalid full name input")
    fname=read.question("Please enter a valid full name: ");
}

var mob=read.question("Enter your mobile number: ");
var mob_regex= /^\+\d{1,3}-\d{9,10}$/       //validation to take input for proper mobile number of 10-digit with country code
if(!mob.match(mob_regex))
{
    console.log("Invalid Mobile Number")
    mob=read.question("Please enter a valid mobile number: ");
}

var student={
    '<<name>>': name,
    '<<full name>>': fname,
    '91­xxxxxxxxxx': mob,
    '01-01-2016': date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()
}

str=str.replace(/<<name>>|<<full name>>|91­xxxxxxxxxx|01-01-2016/gi, function(matched){
    return student[matched];
})
console.log(str);