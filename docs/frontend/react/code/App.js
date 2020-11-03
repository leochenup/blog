import React from 'react';
import Button from './Button'
import Input from './Input'

import withLocal from './withLocal'
import withAjax from './withAjax'


let style = {
    width: 250,
    margin: "200px auto",
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 5
}

let WithAjaxInput = withAjax(Input)
let WithLocalInput = withLocal(WithAjaxInput, 'USERNAME')

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    clickHandler = () => {
        console.log(this.state.inputValue, '发送数据')
    }

    inputChange = (e) => {
        let { value } = e.target
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div style={style}>
                <WithLocalInput
                    inputChange={this.inputChange} />
                <Button
                    value={'click'}
                    click={this.clickHandler}
                />
            </div>
        );
    }
}