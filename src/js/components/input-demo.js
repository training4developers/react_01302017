import React from 'react';

export class InputDemo extends React.Component {

    static propTypes = {
        message: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        };
    }

    onChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    render() {
        return <form id="form">
            <label id="label">
                Message: <input name="message" value={this.state.message} onChange={this.onChange} />
            </label>
        </form>;
    }

}
