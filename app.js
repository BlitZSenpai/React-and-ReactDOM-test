const Person = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.age)
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { className: "title" }, "React is rendered"),
        React.createElement(Person, {name:"gojo", age:28}, null),
        React.createElement(Person, {name:"koushik", age:19}, null)
    ])
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));