// TypeScript errors for testing ESLint config

interface BadInterface {
  a: any; // Using 'any' type
  b: string
}

class BadClass { // Using class instead of functional approach
  private value: any = null;
  
  constructor() {
    this.value = "test"
  }
  
  public getValue(): any {
    return this.value
  }
}

// Unused variable
const unusedVariable = "this is not used";

// Poor naming
const a = true;
const b = false;

// Missing return type annotation
function badFunction(param) {
  return param + 1;
}

// Using var instead of const/let
var oldStyleVariable = "bad";

// Non-functional style
let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}

// Missing error handling
async function riskyFunction() {
  const response = await fetch('/api/data');
  return response.json();
}

// Enum usage (should use maps instead)
enum BadEnum {
  FIRST = "first",
  SECOND = "second"
}

// Mutation instead of immutable patterns
const array = [1, 2, 3];
array.push(4);

export { BadClass, badFunction };
