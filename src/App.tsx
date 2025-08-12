import { useState } from "react";

const App = () => {
  const [percentage, setPercentage] = useState(1);
  const [showAnswer, setShowAnswer] = useState(true);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  const questions: string[] = [
    "What is the difference between var, let, and, const?",
    "What is JavaScript?",
    "What are the different data types in JavaScript?",
    "What is the difference between == and ===?",
    "What is a closure in JavaScript?",
    "What is the use of let, const, and var?",
    "What is NaN in JavaScript?",
    "What are template literals?",
    "What is the difference between null and undefined?",
    "How do you create an object in JavaScript?",
    "How do you add an element to an array?",
    "What is an arrow function?",
    "What does this refer to?",
    "What is event bubbling in JavaScript?",
    "How to prevent event bubbling?",
    "What is the difference between map() and forEach()?",
    "What is a promise in JavaScript?",
    "What are async and await?",
    "How to handle errors in JavaScript?",
    "What is hoisting in JavaScript?"
  ]

  const answer: string[] = [
    "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assigment and const preventing it. However, const objects can have their contents modified.",
    "JavaScript is a high-level, interpreted scripting language used to create dynamic content on websites such as interactive forms, animations, and real-time updates.",
    "String, Number, Boolean, null, undefined, Symbol, BigInt, Object (includes arrays, functions, dates, etc.)",
    `"==" compares values after type conversion (loose equality). "===" compares values and types (strict equality).`,
    "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has returned.",
    "var: function-scoped, can be redeclared and updated, let: block-scoped, can be updated but not redeclared, const: block-scoped, cannot be updated or redeclared (but objects/arrays can be mutated)",
    'NaN stands for "Not-a-Number". It’s a special value indicating an invalid number result (e.g., 0 / 0 or parseInt("abc")).',
    "Template literals use backticks (`) and allow embedded expressions using ${}.",
    'undefined: a variable has been declared but not assigned a value. Null: explicitly assigned to represent "no value".',
    `let person = {
      name: "Alice",
      age: 25
    };`,
    `Using .push() method: let arr = [1, 2];  
    arr.push(3); // [1, 2, 3]  `,
    "A shorthand syntax for writing functions: const add = (a, b) => a + b;",
    `In a method: refers to the object
    In a function: refers to global object (window in browser), or undefined in strict mode
    In arrow functions: lexically inherited from surrounding scope`,
    "Event bubbling is the process where an event starts from the target element and bubbles up to its ancestors.",
    "Use event.stopPropagation() inside the event handler.",
    `map() returns a new array with transformed elements.
    forEach() just iterates without returning a new array.`,
    "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.",
    `async marks a function as asynchronous.
    await pauses the execution until the Promise is resolved. Example: async function fetchData() {
      let data = await fetch("url");
    }`,
    `Using try...catch blocks: try {
      // code that may throw an error
    } catch (error) {
      console.error(error);
    }`,
    "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution."
  ]

  const handleNext = () => {
    if (percentage === 20) return;

    setShowAnswer(true);
    setPercentage(percentage + 1);
  }
  
  const handlePrevious = () => {
    if (percentage === 1) return;
    
    setShowAnswer(true);
    setPercentage(percentage - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-extrabold mb-3">Flash Cards</p>

      <div className="w-100 font-semibold">

        <div className="rounded-lg flex items-center border-1 mb-3 bg-white p-1 relative">
          
          <div className="bg-gray-300 h-10 rounded-md" style={{ width: percentage * 20 }}>

            <div className="text-end p-2 pr-4 whitespace-nowrap absolute right-0">
              {percentage} of 20
            </div>
          </div>
        </div>

        <div className="border-1 rounded-lg p-1 bg-white text-center">

          <div className="rounded-lg bg-gray-100 mb-1 p-10 h-60 overflow-y-auto">
            {showAnswer ? questions[percentage - 1] : answer[percentage - 1]}
          </div>

          <div className="rounded-lg bg-gray-100 flex justify-between p-2">

            <button onClick={handlePrevious}>
              <small className="text-gray-500">&lt; Previous</small>
            </button>
            
            <button onClick={handleShowAnswer}>
              <span className="py-2">{showAnswer ? "Show Answer" : "Hide Answer"}</span>
            </button>

            <button onClick={handleNext}>
              <small className="text-gray-500">Next &gt;</small>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;