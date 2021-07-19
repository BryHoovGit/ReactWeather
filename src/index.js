import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //Initializing state
        this.state = { lat: null, errorMessage: '' };

        //Gets user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude})
            },
            (err) => 
            {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    render() {
        //No lat, has error
        if (this.state.errorMessage && !this.state.lat) {
           return <div>Error: {this.state.errorMessage}</div>; 
        }
        // Has lat, no error
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        //No lat, no error
        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))