import React from 'react';

export class ViewItemRow extends React.Component {


    render() {
        return <li>
            {this.props.item}
            <button type="button" onClick={() => this.props.deleteRow(this.props.item)}>Delete</button>
            <button type="button" onClick={() => this.props.editRow(this.props.item)}>Edit</button>
        </li>;
    }

}

export class EditItemRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    render() {
        return <li>
            <input type="text" id="item-input" name="item" value={this.state.item} onChange={this.onChange} />
            <button type="button" onClick={() => this.props.saveRow(this.state.item)}>Save</button>
            <button type="button" onClick={() => this.props.cancelRow()}>Cancel</button>
        </li>;
    }

}

export class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editItem: ''
        };
    }

    static propTypes = {
        items: React.PropTypes.array
    };

    editRow = (item) => {
        this.setState({
            editItem: item
        });
    };

    deleteRow = (item) => {
        this.props.deleteRow(item);
    };

    saveRow = (item) => {
        this.props.saveRow(this.state.editItem, item);
        this.setState({
            editItem: ''
        });        
    };

    cancelRow = () => {
        this.setState({
            editItem: ''
        });
    };

    render() {
        return <ul>
            {this.props.items.map((item, index, list) =>
                this.state.editItem === item
                    ? <EditItemRow key={index} item={item} saveRow={this.saveRow} cancelRow={this.cancelRow} />
                    : <ViewItemRow key={index} item={item} editRow={this.editRow} deleteRow={this.deleteRow} />
            )}
        </ul>;
    }
}