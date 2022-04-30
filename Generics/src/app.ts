// Code goes here!

//**------------------------------------------------ GENERICS TYPE------------------------------------------------------- */

//

/*
function identityGeneric<t>(name: t):t { return name };
console.log(identityGeneric('James'));
console.log(identityGeneric(5));


function identityAny(name: any):any { return name };
console.log(identityAny('James'));
console.log(identityAny(5));

*/

//


//**------------------------------------------------ GENERICS CONSTRAINTS ------------------------------------------------ */

//


// function identityGeneric<t extends string>(name: t): t { console.log(name.length); return name };
// console.log(identityGeneric('James'));


//


//**------------------------------------------------ GENERICS with keyOf ------------------------------------------------ */

//

/*

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { return obj[key] };
console.log(extractAndConvert({ name: 'Max', age: 12, isTeacher: true }, 'isTeacher'));

*/

//


//**------------------------------------------------ GENERICS CLASS ------------------------------------------------ */

//

/*
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

*/

//


//**------------------------------------------------ GENERICS CLASS ------------------------------------------------ */

//

/*
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

*/