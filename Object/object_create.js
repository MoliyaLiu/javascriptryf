var person1 = {
    name: "jenny",
    age: 35,
    greeting: function(){
        console.log('Hi! I am ' + this.name + ".");
    }
}

//person2 use the person1 as a template to clone a new object
var person2 = Object.create(person1);

console.log("Before....");

person1.greeting();
person2.greeting();

person2.name = 'Bob';

console.log("After....");
person1.greeting();
person2.greeting();
