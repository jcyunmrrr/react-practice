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



let count = 0;
const addOne = () => {
    ++count;
    renderCounterApp();
};
const minusOne = () => {
    --count;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
}

// ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>COUNT: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();