console.log("app.js is running")

// JSX - JavaScript XML

const appRoot = document.getElementById("app");

const app = {
    title: "Indecision App", 
    subtitle: "Put your life in the hands of a computer", 
    options: ["a", "bb"], 
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No option"}</p>
        <ol>
            <li>you come first</li>
            <li>wait a second</li>
        </ol>
    </div>
);

const user = {
    name: "jcyunmrrr", 
    age: 1.414, 
    location: "country road take me home", 
    location: "", 
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);