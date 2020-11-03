import React from 'react';

let style = {
    fontWeight:600,
    padding: 0,
    margin: 0,
    padding: '4px 20px',
    background: '#f5f6f5f6',
    color: '#3eaf7c',
    fontSize: 14,
    outline: 'none',
    border: '1px solid #3eaf7c',
    borderRadius: '3px',
    transition: '.3s ease-in-out'
}

let styleClick = {
    fontWeight:600,
    padding: 0,
    margin: 0,
    padding: '4px 20px',
    background: '#3eaf7c',
    color: '#f5f6f5f6',
    fontSize: 14,
    outline: 'none',
    border: '0px',
    borderRadius: '3px',
    border: '1px solid #3eaf7c',
    transition: '.3s ease-in-out'
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        };
    }

    mouseDownHandler = () => {
        this.setState({
            isClick: true
        })
    }
    mouseUpHandler = () => {
        this.setState({
            isClick: false
        })
    }

    clickHandler = () => {
        this.props.click()
    }

    render() {
        return (
            <button
                style={this.state.isClick ? styleClick : style}
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}
                onClick={this.clickHandler}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Button