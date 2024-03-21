"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var appRoot = document.getElementById("app");
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["a", "bb"]
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No option"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "you come first"), /*#__PURE__*/React.createElement("li", null, "wait a second")));
var count = 0;
var addOne = function addOne() {
  ++count;
  renderCounterApp();
};
var minusOne = function minusOne() {
  --count;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

// ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "COUNT: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: minusOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "RESET"));
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
