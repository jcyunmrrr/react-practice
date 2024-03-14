"use strict";

console.log("app.js is running");

// JSX - JavaScript XML

var appRoot = document.getElementById("app");
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer"
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "you come first"), /*#__PURE__*/React.createElement("li", null, "wait a second")));

// var userName = "jcyunmrrr";
// var userAge = 3.14159;
// var userLocation = "somewhere out there beneath the pale moonlight";

// var templateTwo = (
//     <div>
//         <h1>{userName}</h1>
//         <p>Age: {userAge}</p>
//         <p>Location: {userLocation}</p>
//     </div>
// );

var user = {
  name: "jcyunmrrr-2",
  age: 1.414,
  location: "country road take me home"
};
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
