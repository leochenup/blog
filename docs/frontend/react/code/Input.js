import React from 'react';

let style = {
    outline: 'none',
    border: '1px solid #cccccc',
    borderRadius: '3px',
    paddingLeft: 10,
    transition: '.3s ease-in-out'
}

let styleFocus = {
    outline: 'none',
    border: '1px solid rgba(62, 175, 124, 1)',
    borderRadius: '3px',
    paddingLeft: 10,
    boxShadow: "rgba(62, 175, 124, 0.5) 0 0 5px",
    transition: '.3s ease-in-out'
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isFocus: false
        };
    }

    focusHandler = () => {
        this.setState({
            isFocus: true
        })
    }

    blurHandler = () => {
        this.setState({
            isFocus: false
        })
    }

    inputChange = (e) => {
        this.props.inputChange(e)
    }

    render() {
        return (
            <input
                style={this.state.isFocus ? styleFocus : style}
                type="text"
                onFocus={this.focusHandler}
                onBlur={this.blurHandler}
                onChange={this.inputChange}
                defaultValue={this.props.defaultValue}
            />
        );
    }
}

export default Input