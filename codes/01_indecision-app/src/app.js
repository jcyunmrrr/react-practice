console.log("app.js is running")

// JSX - JavaScript XML

var appRoot = document.getElementById("app");

var app = {
    title: "Indecision App", 
    subtitle: "Put your life in the hands of a computer"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>you come first</li>
            <li>wait a second</li>
        </ol>
    </div>
);

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

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);