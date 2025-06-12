const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"Hello1"), React.createElement("h2",{},"Hello2")]
    )
);
//const heading = React.createElement("h1",{},"Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//root.render(heading);