
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";


const Root = () => (
    <Router>
        <Route path="/" component={App} />
    </Router>
);

export default Root;