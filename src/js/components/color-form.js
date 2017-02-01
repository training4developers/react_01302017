import React from 'react';

export class ColorForm extends React.Component {

    static propTypes = {
        addColor: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    // addNewColor = () => {
    //     this.props.addColor(this.state.newColor);
    //     // this.setState({
    //     //     newColor: ''
    //     // });
    // };

    veryBadIdea = () => {
        console.log(this.input.value);
    };

    componentDidMount() {
        console.log(this.input);
        this.input.addEventListener('keyup', this.veryBadIdea);

        this.newColorInput.focus();
    }

    componentWillUnmount() {
        this.input.removeEventListener('keyup', this.veryBadIdea);
    }

    render() {

        const myDefaultValue = 'We do not want the Patriots to win the Super Bowl!';

        return <form>
            <div>
                <label htmlFor="new-color-input">New Color</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange}
                    ref={(input) => this.newColorInput = input} />
            </div>
            <div>
                <input type="text" defaultValue={myDefaultValue}
                    ref={(input) => { this.input = input; }} />
            </div>
            <button type="button" onClick={() => this.props.addColor(this.state.newColor)}>Add Color</button>
        </form>;
    }    

}
