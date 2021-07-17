import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //Initializing state
        this.state = {lat: null};

        //Gets user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))