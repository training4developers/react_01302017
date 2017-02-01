import React from 'react';
import ReactDOM from 'react-dom';

class DemoForm extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            inputNumber: 0,
            inputDate: '2017-02-01',
            inputRange: 25,
            inputColor: '#f3a122',
            inputCheckbox: true,
            inputRadio: 'radio2',
            textarea: '',
            selectDropDown: '',
            selectListBox: '',
            selectMultiSelect: []
        };
    }

    onChange = e => {

        let controlValue;

        switch (e.currentTarget.type) {
            case 'number':
                controlValue = Number(e.currentTarget.value);
                break;
            case 'checkbox':
                controlValue = e.currentTarget.checked;
                break;
            default:

                if (e.currentTarget.multiple) {
                    controlValue = Array.from(e.currentTarget.options)
                        .filter(option => option.selected)
                        .map(option => option.value);

                } else {
                    controlValue = e.currentTarget.value;
               }

                break;
        }

        this.setState({
            [e.currentTarget.name]: controlValue
        });
    };

    render() {

        return <form>
            <div>
                <label>Input Text:</label>
                <input type="text" list="color-preferences" name="inputText" required value={this.state.inputText} onChange={this.onChange} />
                <br /><span>{this.state.inputText}, {typeof this.state.inputText}</span>
                <datalist id="color-preferences">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Brown</option>
                    <option>Black</option>
                </datalist>
            </div>
            <div>
                <label>Input Number:</label>
                <input type="number" name="inputNumber" value={this.state.inputNumber} onChange={this.onChange} />
                <br /><span>{this.state.inputNumber}, {typeof this.state.inputNumber}</span>
            </div>
            <div>
                <label>Input Date:</label>
                <input type="date" name="inputDate" value={this.state.inputDate} onChange={this.onChange} />
                <br /><span>{this.state.inputDate}, {typeof this.state.inputDate}</span>
            </div>
            <div>
                <label>Input Range:</label>
                <input type="range" name="inputRange" min="20" max="60" value={this.state.inputRange} onChange={this.onChange} />
                <br /><span>{this.state.inputRange}, {typeof this.state.inputRange}</span>
            </div>
            <div>
                <label>Input Color:</label>
                <input type="color" name="inputColor" value={this.state.inputColor} onChange={this.onChange} />
                <br /><span>{this.state.inputColor}, {typeof this.state.inputColor}</span>
            </div>
            <div>
                <label>Input Checkbox:</label>
                <input type="checkbox" name="inputCheckbox" checked={this.state.inputCheckbox} onChange={this.onChange} />
                <br /><span>{this.state.inputCheckbox ? 'true' : 'false'}, {typeof this.state.inputCheckbox}</span>
            </div>
            <fieldset>
                <legend>Keith is legend!</legend>
                <div>
                    <label>Input Radio 1:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio1'} value="radio1" onChange={this.onChange} />
                </div>                
                <div>
                    <label>Input Radio 2:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio2'} value="radio2" onChange={this.onChange} />
                </div>                
                <div>
                    <label>Input Radio 3:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio3'} value="radio3" onChange={this.onChange} />
                </div>                
                <span>{this.state.inputRadio}, {typeof this.state.inputRadio}</span>
            </fieldset>
            <div>
                <label>Textarea:</label>
                <textarea name="textarea" value={this.state.textarea} onChange={this.onChange} />
                <br /><span>{this.state.textarea}, {typeof this.state.textarea}</span>
            </div>            
            <div>
                <label>Drop Down:</label>
                <select name="selectDropDown" value={this.state.selectDropDown} onChange={this.onChange}>
                    <option value="">Select One...</option>
                    <option value="1">First One</option>
                    <option value="2">Second One</option>
                    <option value="3">Third One</option>
                </select>
                <br /><span>{this.state.selectDropDown}, {typeof this.state.selectDropDown}</span>
            </div>
            <div>
                <label>List Box:</label>
                <select name="selectListBox" size="5" value={this.state.selectListBox} onChange={this.onChange}>
                    <option value="1">First One</option>
                    <option value="2">Second One</option>
                    <option value="3">Third One</option>
                </select>
                <br /><span>{this.state.selectListBox}, {typeof this.state.selectListBox}</span>
            </div>            
            <div>
                <label>Multi-Select List Box:</label>
                <select name="selectMultiSelect" size="5" multiple value={this.state.selectMultiSelect} onChange={this.onChange}>
                    <option value="1">First One</option>
                    <option value="2">Second One</option>
                    <option value="3">Third One</option>
                </select>
                <br /><span>{JSON.stringify(this.state.selectMultiSelect)}, {typeof this.state.selectMultiSelect}</span>
            </div>            
        </form>;

    }


}


ReactDOM.render(<DemoForm />, document.querySelector('main'));
