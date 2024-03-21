"use strict";

var appRoot = document.getElementById("app");
var app = {
  title: "Toggle Toggle",
  detailText: "Details here."
};
var isVisible = false;
var onToggleDetail = function onToggleDetail() {
  isVisible = !isVisible;
  renderPage();
};
var renderPage = function renderPage() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleDetail
  }, isVisible ? "Hide details" : "Show details"), isVisible && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, app.detailText)));
  ReactDOM.render(template, appRoot);
};
renderPage();
