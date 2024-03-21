const appRoot = document.getElementById("app");

const app = {
    title: "Toggle Toggle", 
    detailText: "Details here."
};

let isVisible = false;
const onToggleDetail = () => {
    isVisible = !isVisible;
    renderPage();
};

const renderPage = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleDetail}>
                {isVisible ? "Hide details" : "Show details"}
            </button>
            {isVisible && (
            <div>
                <p>{app.detailText}</p>
            </div>
            )}
        </div>
    )
    
    ReactDOM.render(template, appRoot);
}

renderPage();