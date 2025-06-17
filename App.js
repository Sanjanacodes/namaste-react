import React from "react"; // added after CDN links are removed
import ReactDOM from "react-dom/client"; // added after CDN links are removed (/client used for React 19)

//creating a React element using JSX - instead of using React.createElement - both are objects

//React Element
const jsxHeading = <h1 id = "heading">Example of JSX</h1>
console.log(jsxHeading)

const number = 8000;

//REACT Functional Component
const TitleComp = () => <h1>Example of TitleComp</h1>

//Component Composition
const HeadingComponent = () => (
    <div>
        <TitleComp/>
        {/* {TitleComp()}
        <TitleComp></TitleComp> */
        /* Above three ways of calling TitleComp are the same thing */
        }

    
        <h2>{number}</h2>
        {jsxHeading}
        <h1 id = "headingFC">Functional Component</h1>

    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("-----")
// console.log(root);
//root.render(jsxHeading);
root.render(<HeadingComponent/>);

