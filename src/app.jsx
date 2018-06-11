import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        fetch('/api')
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        this.setState({
                            message: data.message
                        });
                    })
                } else {
                    response.json().then(error => {
                        console.log("Error: " + error.message);
                    });
                }
            })
            .catch(err => {
                console.log("Error: " + err);
            })
    }
    render() {
        return <h1>{this.state.message}</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                         <Hello />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    container
);

if (module.hot) {
  module.hot.accept();
}