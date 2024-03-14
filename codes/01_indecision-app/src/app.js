console.log("app.js is running")

// JSX - JavaScript XML

var appRoot = document.getElementById("app");
var template = <h1 id="someid">this is jsx from app.js</h1>;

ReactDOM.render(template, appRoot);