import React from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

const actionTypes = keyMirror({
    REFRESH_REQUEST: null,
    REFRESH_DONE: null,
    INSERT_REQUEST: null,
});

const createRefreshRequestAction = () => ({
    type: actionTypes.REFRESH_REQUEST,
    authors: []
});

const createRefreshDoneAction = (authors) => ({
    type: actionTypes.REFRESH_DONE,
    authors
});

const createInsertRequestAction = (author) => ({
    type: actionTypes.INSERT_REQUEST,
    author
});

const refreshAuthors = () => {
    return dispatch => {
        dispatch(createRefreshRequestAction());
        return fetch('http://localhost:5000/authors')
            .then(res => res.json())
            .then(authors => dispatch(createRefreshDoneAction(authors)));
    };
};

const insertAuthor = author => {
    return dispatch => {
        dispatch(createInsertRequestAction());
        return fetch('http://localhost:5000/authors', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            body: JSON.stringify(author)
        })
            .then(() => fetch('http://localhost:5000/authors'))
            .then(res => res.json())
            .then(authors => dispatch(createRefreshDoneAction(authors)));
    };
};

const reducer = (state = { authors: [] }, action) => {

    switch(action.type) {
        case actionTypes.REFRESH_DONE:
            return Object.assign({}, state, { authors: action.authors });
        default:
            return state;
    }

};

const appStore = createStore(reducer, applyMiddleware(thunk));

class AuthorTool extends React.Component {

    static propTypes = {
        authors: React.PropTypes.array,
        refreshAuthors: React.PropTypes.func,
        insertAuthor: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    componentDidMount() {
        this.props.refreshAuthors();
    }

    onChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    addAuthor = () => {
        this.props.insertAuthor({ firstName: this.state.firstName, lastName: this.state.lastName });
    };

    render() {
        return <div>
            <h1>Author Tool</h1>
            <ul>
                {this.props.authors.map(author => <li key={author.id}>{author.firstName} {author.lastName}</li>)}
            </ul>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.addAuthor}>Add Author</button>
            </form>
        </div>;
    }

}

const AuthorToolContainer = connect(
    ({ authors }) => ({ authors }),
    dispatch => bindActionCreators({ refreshAuthors, insertAuthor }, dispatch)
)(AuthorTool);

ReactDOM.render(<AuthorToolContainer store={appStore} />, document.querySelector('main'));
