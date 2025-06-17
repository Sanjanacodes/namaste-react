import React from "react"; // added after CDN links are removed
import ReactDOM from "react-dom/client"; // added after CDN links are removed (/client used for React 19)
const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"Hello123"), React.createElement("h2",{},"Hello2")]
    )
);
//const heading = React.createElement("h1",{},"Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//root.render(heading);