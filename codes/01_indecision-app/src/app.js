console.log("app.js is running")

// JSX - JavaScript XML

const appRoot = document.getElementById("app");

const app = {
    title: "Indecision App", 
    subtitle: "Put your life in the hands of a computer", 
    options: [], 
};

const onRemoveAll = () => {
    app.options = [];
    renderPage();
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
};

const renderPage = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No option"}</p>
            <p>#option = {app.options.length}</p>
            <button onClick={onRemoveAll}>REMOVE ALL</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button >ADD OPTION</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderPage();