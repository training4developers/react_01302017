import React from 'react';

import { ColorHeader as MyColorHeader } from './color-header'; 
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

    static propTypes = {
        myColors: React.PropTypes.array
    };    

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            colors: this.props.myColors.concat()
        };
    }

    addColor = (newColor) => {
        this.setState({
            colors: this.state.colors.concat(newColor)
        });
    }

    deleteColor = (deleteColor) => {
        this.setState({
            colors: this.state.colors.filter(color => color !== deleteColor)
        });
    }

    saveColor = (oldColor, newColor) => {
        this.setState({
            colors: this.state.colors.filter(color => color !== oldColor).concat(newColor)
        });        
    }

    render() {

        return <div>
            <MyColorHeader />
            <ItemList items={this.state.colors} deleteRow={this.deleteColor} saveRow={this.saveColor} />
            <ColorForm addColor={this.addColor} />
        </div>;
    }
}