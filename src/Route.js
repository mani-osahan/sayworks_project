import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import launchPage from "./index";
import Front from './FrontPage'

const routes = () =>(

        <Router>
            <Switch>
                <Route path="/" component={launchPage} exact/>
                <Route path="/front" component={Front}/>
            </Switch>
        </Router>
)

export default routes;