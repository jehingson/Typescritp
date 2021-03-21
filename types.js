var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('HELLO WORD');
// Types 
var myString = "Hola mundo";
myString = 20 + "";
var myNumber = 22;
var myBool = false;
var myVar = "Hello";
myVar = 20;
// any es que puede cambiar el tipo de datos
console.log(myString);
// Arrays
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
var strNumTuple;
strNumTuple = ["helo", 22];
// void, undefined, null 
// let myVoid: void = undefined;
// let myNull: null = null;
// let myUndefiend: undefined = undefined;
//Funciones
function getSuma(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//El ? en la variable significa que el valor es opcional
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text + " ");
}
showTodo({
    title: 'Eat Dinner',
    text: 'Lorem use'
});
// CLASESSS
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is register");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var user = new User('JSON', 'DEV@gmail.com', 28);
console.log(user.AgeInYears());
//herencia
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Gordom = new Member(1, 'Gordon', 'Gordon@gmail.com', 24);
Gordom.payInvoice();
