import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () => (
    <>
        <div id="container">
            <Title />
            <h1 className="heading">React Functional component</h1>
        </div>
        <div className="container1">
            <h1 className="heading1">h2 tag</h1>
        </div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);