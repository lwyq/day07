/*

var c = { //Object literal
    suit: 'heart',
    value: 1,
    rank: 'A',
    displayCard: function() {
        console.log(">> suit: %s", this.suit);
    }
}

var d = { //Object literal
    suit: 'clubs',
    value: 2,
    rank: 'A',
}

//Call the function; the function creates the object, and returns the object
var mkCard = function(s, r, v){
    return ({
        suit: s,
        rank: r,
        value: v,
        displayCard: function(){
            console.log(">> suit: %s", this.suit)
        }
    });
}


var a = mkCard('heart', 'A', 1);
var b = mkCard('heart', '2', 2);

a.displayCard();
b.displayCard();



console.log(c);

console.log(c.displayCard());
d.displayCard = c.displayCard;

console.log(d.displayCard());

*/

//An alternative way of doing this: { function }  -->      instead of   function { }
//Function constructor


var Card = function (s, r, v) {
    this.suit = s;
    this.rank = r;
    this.value = v;
}


Card.prototype.displayCard = function () {
    console.log(">> suit: %s, rank: %s, value: %d",
        this.suit, this.rank, this.value);
}
Card.prototype.make = "Aladdin";  //prototype exists only in function

//Card('spade', 'Q', 10);    /// if there isn't the function new as below, it becomes part of a global object (i.e., browser)
var z = new Card('clubs', 'K', 10);  //with the new function, it becomes an object within the { }
console.log("z = %s", z.rank);
z.displayCard();

var y = new Card('diamond', 'J', 9);  //with the new function, it becomes an object within the { }
console.log("y = %s", y.rank);
y.displayCard();

Card.prototype.valueInBJ = function () {
    if (this.rank == 'A')
        return (11);
    return this.value;
}


console.log("calling valueInBJ()");
console.log("y >>>>> %d", y.valueInBJ());
console.log("z >>>>> %d", z.valueInBJ());

//example of adding new attributes e.g. owner to the object z, while leaving prototype the same 
console.log("new displayCard");
z.displayCard();

z.displayCard = function () {
    console.log(">>>> %s <<<< ", this.rank);
};
z.owner = "chuk";

console.log("z = owner %s", z.owner);
z.displayCard();

console.log("y = %s", y.owner);
y.displayCard();