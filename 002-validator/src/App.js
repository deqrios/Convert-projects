import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/sign_up" component={SignUp} />
        </BrowserRouter>
    );
}

export default App;
