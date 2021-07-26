import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component {
    //Changed with refactor
    // constructor(props) {
    //     super(props);

    //     //Initializing state, one way using constructor function
    //     this.state = { lat: null, errorMessage: '' }; 
    // }

    state = { lat: null, errorMessage: '' }

    componentDidMount() {
         //Gets user's current location
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // remove conditionals and fix multiple render method issues when expanding or changing codebase 
    
    renderContent() {
        //No lat, has error
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>; 
         }
         // Has lat, no error
         if (!this.state.errorMessage && this.state.lat) {
             return <SeasonDisplay lat={this.state.lat} />
         }
         //No lat, no error
         return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
        <div>{this.renderContent()}</div>
    )}
}

ReactDOM.render(<App />, document.querySelector('#root'))