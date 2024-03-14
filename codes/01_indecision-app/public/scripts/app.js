"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var appRoot = document.getElementById("app");
var template = /*#__PURE__*/React.createElement("h1", {
  id: "someid"
}, "this is jsx from app.js");
ReactDOM.render(template, appRoot);
