import React from 'react';
import './App.css';
import axios from 'axios'


class Result extends React.Component {

    state = {
        jobId: this.props.jobId,
        jobName: this.props.jobName,
        jobLocation: this.props.jobLocation,
        jobDescription: this.props.jobDescription
    }

    render() {
        return (

            <div>
                <p id='results-job-id'>{this.state.jobId}</p>
                <p id='result-job-name'>{this.state.jobName}</p>
                <p id='result-location'>{this.state.jobLocation}</p>
                <p id='result-job-description'>{this.state.jobDescription}</p>
                <br/>
            </div>

        );
    }
}


class searchResults extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resultsPerPage: 5,
            resultsFromDB: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/search")
            .then(res => {
                const resultsFromDB = res.data;
                this.setState({resultsFromDB});
            })
    }


    loadResults = () => {
        this.setState({
            resultsPerPage: this.state.resultsPerPage < this.state.results.length ? this.state.resultsPerPage
                + this.state.resultsIncrement : this.resultsPerPage,
            hasMore: (this.state.resultsPerPage < this.state.results.length),
        });
    }

    render() {

        let resultsDB = this.state.resultsFromDB.slice().map((result, index) => (
            <Result
                jobId={index}
                jobLocation={result.job_location}
                jobName={result.job_title}
                jobDescription={result.description}

            />

        ));

        return (
            <html>

            <div className="results">
                {resultsDB}
            </div>

            </html>

        );
    }
}

export default searchResults;
