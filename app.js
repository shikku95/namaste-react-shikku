const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from REACT"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const roots = ReactDOM.createRoot(document.getElementById("roots"));
roots.render(heading);
