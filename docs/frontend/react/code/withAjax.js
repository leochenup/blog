import React from 'react';

let withAjax = (Comp) => {
    return class withAjax extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
        }

        componentDidMount() {
            fetch("http://localhost:3000/translate.json")
                .then(response => response.json())
                .then((res) => {
                    this.setState({
                        value: res[this.props.keyWord]
                    })
                })
        }

        render() {
            return <Comp {...this.props} defaultValue={this.state.value} />
        }
    }

}

export default withAjax
