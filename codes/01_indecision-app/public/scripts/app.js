"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var appRoot = document.getElementById("app");
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};
var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var randOption = app.options[randNum];
  alert(randOption);
};
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderPage();
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderPage();
  }
};
var renderPage = function renderPage() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No option"), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll
  }, "REMOVE ALL"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "ADD OPTION")));
  ReactDOM.render(template, appRoot);
};
renderPage();
