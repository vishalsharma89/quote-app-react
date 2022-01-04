import React, { PureComponent } from 'react'
import axios from 'axios';
import './App.css';

export class App extends PureComponent {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();

    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                // console.log(advice);
                this.setState({ advice });
            }).catch((error) => {
                console.log(error);

            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GENERATE QUOTE!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App
