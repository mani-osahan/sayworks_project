import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import logo from './logo.png'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Front from './FrontPage'


class LaunchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toResults: false
        }
    }

    handleSearch = () => {
        this.setState({
            toResults: true
        });
    };


    render() {

        if (this.state.toResults === true) {
            return <Router>
                <switch>
                    <Route path="/" component={LaunchPage} exact/>
                    <Route path="/front" component={Front}/>
                </switch>

            </Router>
        }


        return (
            <Router>
                <html>
                <div className="parent-header">
                    <header className="title">
                        <img src={logo} alt="logo" className="logo"/>
                        <h1 className="launchTitle">Sayworks</h1>
                    </header>

                    <div className="signin-Button">

                    </div>

                </div>

                <div className="parent-content">
                    <div className="search">

                        <div className="job-search">
                            <input type="text" placeholder="Search..."/>
                        </div>

                        <div className="location-search">

                            <select id="location" name="location">
                                <option value="Ottawa">Ottawa</option>
                                <option value="Ottawa">Ottawa</option>
                                <option value="Ottawa">Ottawa</option>
                            </select>

                        </div>

                        <div className="search-button">
                            <Link to="/front">
                                <button type="button" onClick={this.handleSearch}>Search</button>
                            </Link>
                        </div>
                    </div>

                </div>
                </html>
            </Router>
        );
    }
}

ReactDOM.render(
    <LaunchPage/>
    , document.getElementById("root"));

serviceWorker.unregister();
