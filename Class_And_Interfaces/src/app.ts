//

//**------------------------------------------------ CLASS AND INHERITANCE --------------------------------------------- */

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

*/

//

//**------------------------------------ OVERRIDING PROPERTIES AND PROTECTED MODIFIER ----------------------------------- */

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string): void {
    if (name === 'Max'){
      return;
  }
  this.employees.push(name);
}

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Davis');
accounting.addEmployee('Leeta');
console.log(accounting);

*/

//

//**------------------------------------------------- GETTER AND SETTERS ------------------------------------------------- */

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) { 
      return this.lastReport;
    }
    throw new Error('No Report Found');
    
  }

  set mostRecentReport(value: string) {
    if (!value) { 
      throw new Error('Please enter an report');
    }
    this.addReport(value);
   }
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === 'Max'){
      return;
  }
  this.employees.push(name);
}

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Davis');
accounting.addEmployee('Leeta');
console.log(accounting);
accounting.mostRecentReport = 'New Report!';
console.log(accounting.mostRecentReport);

*/

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

*/

//

//**------------------------------------------- STATIC PROPERTIES AND METHODS --------------------------------------------- */

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name :string) { 
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();

const employee1 = Department.createEmployee('Lucas');
console.log(employee1);
const dep = new Department('10','javier');
console.log(dep)

*/

//

//**----------------------------------------- SINGLETONS AND PRIVATE CONSTRUCTOR ------------------------------------------ */

//

/*
class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name :string) { 
    return { name: name };
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  static getInstance() { 
    if (AccountingDepartment.instance) { 
      return this.instance;
    }
    this.instance = new AccountingDepartment('10', ['James']);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const account = AccountingDepartment.getInstance();
console.log(account);
const account2 = AccountingDepartment.getInstance();
console.log(account2);

*/

//

//**---------------------------------------------------- INTERFACES ---------------------------------------------------- */

//

/*
interface Person { 
  name: string;
  age: number;

  greet(phrase:string):void;
}

let user: Person;

user = {
  name: 'James',
  age: 14,
  greet(phrase:string) {console.log(phrase+''+this.name) }
};
 
console.log(user);
user.greet('Hello');

*/

//

//**---------------------------------------------- INTERFACES WITH CLASSES ----------------------------------------------- */

//

/*
interface Greetable {
  name: string;
  
  greet(phrase: string): void;
}
 
class Person implements Greetable{
  name: string;
  age: number;
  constructor(n: string,a:number) { 
    this.name = n;
    this.age = a;
  }

  greet(phrase:string) {console.log(`${phrase} ${this.name} and my age is ${this.age}`) }
}
 
const kelum = new Person('Klum', 39);
console.log(kelum);
kelum.greet('Hi,My name is ');

*/

//

//**----------------------------------------------- EXTENDING INTERFACES ----------------------------------------------- */

//

/*

interface name { 
    name: string;

}
interface Greetable extends name {
  
  greet(phrase: string): void;
}
 
class Person implements Greetable{
  name: string;
  age: number;
  constructor(n: string,a:number) { 
    this.name = n;
    this.age = a;
  }

  greet(phrase:string) {console.log(`${phrase} ${this.name} and my age is ${this.age}`) }
}
 
const kelum = new Person('Klum', 39);
console.log(kelum);
kelum.greet('Hi,My name is ');

*/

//

//**----------------------------------------------- INTERFACES AS FUNCTION----------------------------------------------- */

//

/*
interface AddFun { 
  (num1: number, num2: number): void;
}

let add: AddFun;
add = (n1: number, n2: number) => { return (n1 + n2) };
console.log(add(12, 14));

*/

//

//**--------------------------------------- OPTIONAL PROPERTIES AND PARAMETERS -------------------------------------- */

//

/*

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);

*/
