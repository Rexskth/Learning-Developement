// it is day 6




// Application structure
// Vite gives us everything we need to develop a React application. Its initial file structure looks like this:



// ├── README.md
// ├── index.html
// ├── node_modules
// ├── package-lock.json
// ├── package.json
// ├── public
// │   └── vite.svg
// ├── src
// │   ├── App.css
// │   ├── App.jsx
// │   ├── assets
// │   │   └── react.svg
// │   ├── index.css
// │   └── main.jsx
// └── vite.config.js



// index.html is the most important top-level file. Vite injects your code into this file so that your browser can run it. You won't need to edit this file during our tutorial, but you should change the text inside the <title> element in this file to reflect the title of your application. Accurate page titles are important for accessibility.

// The public directory contains static files that will be served directly to your browser without being processed by Vite's build tooling. Right now, it only contains a Vite logo.

// The src directory is where we'll spend most of our time, as it's where the source code for our application lives. You'll notice that some JavaScript files in this directory end in the extension .jsx. This extension is necessary for any file that contains JSX – it tells Vite to turn the JSX syntax into JavaScript that your browser can understand. The src/assets directory contains the React logo you saw in the browser.

// The package.json and package-lock.json files contain metadata about our project. These files are not unique to React applications: Vite populated package.json for us, and npm created package-lock.json for when we installed the app's dependencies. You don't need to understand these files at all to complete this tutorial. However, if you'd like to learn more about them, you can read about package.json and package-lock.json in the npm docs. We also talk about package.json in our Package management basics tutorial.



// The App.jsx file consists of three main parts: some import statements at the top, the App() function in the middle, and an export statement at the bottom. Most React components follow this pattern.


// Import statements
// The import statements at the top of the file allow App.jsx to use code that has been defined elsewhere. Let's look at these statements more closely.


import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";


// The first statement imports the useState hook from the react library.
// Hooks are a way of using React's features inside a component.
// We'll talk more about hooks later in this tutorial.

// After that, we import reactLogo and viteLogo.
// Note that their import paths start with ./ and / respectively and that they end with the .svg extension at the end.
// This tells us that these imports are local, referencing our own files rather than npm packages.

// The final statement imports the CSS related to our <App /> component.
// Note that there is no variable name and no from directive.
// This is called a side-effect import — it doesn't import any value into the JavaScript file,
// but it tells Vite to add the referenced CSS file to the final code output, so that it can be used in the browser.

// The App() function
// After the imports, we have a function named App(), which defines the structure of the App component.
// Whereas most of the JavaScript community prefers lower camel case names like helloWorld,
// React components use Pascal case (or upper camel case) variable names, like HelloWorld,
// to make it clear that a given JSX element is a React component and not a regular HTML tag.
// If you were to rename the App() function to app(), your browser would throw an error.


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}



// The App() function returns a JSX expression.
// This expression defines what your browser ultimately renders to the DOM.

// Just under the return keyword is a special bit of syntax: <>.
// This is a fragment. React components have to return a single JSX element,
// and fragments allow us to do that without rendering arbitrary <div>s in the browser.
//     You'll see fragments in many React applications.



// The export statement
// There's one more line of code after the App() function:


export default App;


// This export statement makes our App() function available to other modules.
// We'll talk more about this later.



//props
// Props are short for "properties".
// They are how we pass data from one component to another in React.

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}
