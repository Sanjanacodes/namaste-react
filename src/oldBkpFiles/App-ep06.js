import React from "react"; // added after CDN links are removed
import ReactDOM from "react-dom/client"; // added after CDN links are removed (/client used for React 19)
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
