import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['green','yellow','black','red','white','blue'];

class ColorList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };

        //this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    render() {

        return <div>
            <h1>Color List</h1>
            <ul>
                {this.props.myColors.map(myColor =>
                    <li>{myColor}</li>
                )}
            </ul>
            <form>
                <div>
                    <label htmlFor="new-color-input">New Color</label>
                    <input type="text" id="new-color-input" name="newColor"
                        value={this.state.newColor} onChange={() => this.onChange()} />
                </div>
            </form>
        </div>;
    }
}

ReactDOM.render(<ColorList myColors={colors} />, document.querySelector('main'));