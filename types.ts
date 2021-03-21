console.log('HELLO WORD')


// Types 

var myString: string = "Hola mundo";
myString = 20 + ""; 

var myNumber: number = 22;
var myBool: boolean = false;

var myVar: any =  "Hello"
myVar = 20 

// any es que puede cambiar el tipo de datos



console.log(myString)

// Arrays
var StringArray: string[] = ["item1", "item2",""]
var NumberArray: number[] =  [1, 2, 3]
var BooleanArray: boolean[] = [true, false, true]
var AnyArray: any[] = [1, 2, true, "hello", [], {}]

var strNumTuple: [string, number];
strNumTuple = ["helo", 22]

// void, undefined, null 
// let myVoid: void = undefined;
// let myNull: null = null;
// let myUndefiend: undefined = undefined;

//Funciones

function getSuma(num1: number, num2: number){
  return num1 + num2
}

let mySum = function(
  num1: number | string, 
  num2: number | string ):number{
  if(typeof(num1) === 'string'){
    num1= parseInt(num1)
  }
  if(typeof(num2) === 'string'){
    num2 = parseInt(num2)
  }
  return num1 + num2;
}

//El ? en la variable significa que el valor es opcional

function getName(
    firstName: string,
    lastName?: string): string{
      if(lastName == undefined){
        return firstName
      }
  return `${firstName} ${lastName}`
}

function myVoidFunction():void{
  return;
}

//Intefases
interface ITodod {
  title: string; 
  text: string
}

function showTodo(todo:ITodod){
  console.log(`${todo.title} - ${todo.text} `)
}
showTodo({
  title: 'Eat Dinner',
  text: 'Lorem use'
})

// CLASESSS
class User {
  name: String;
  public email: String;
  protected age: Number;

  constructor(name : String, email: String, age: Number){
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register(){
    console.log(`${this.name} is register`)
  }

  showMeAge(){
    return this.age
  }

  public AgeInYears(){
    return this.age + ' years'
  }

  payInvoice(){
    console.log(`${this.name} paide invoice`)
  }
}

var user = new User('JSON', 'DEV@gmail.com', 28 );

console.log(user.AgeInYears())


//herencia

class Member extends User {
  id: Number

  constructor(id, name, email, age){
    super(name, email, age)
    this.id = id;
  }
  payInvoice(){
    super.payInvoice();
  }
}

var Gordom = new Member(1, 'Gordon', 'Gordon@gmail.com', 24)
Gordom.payInvoice()