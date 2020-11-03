import React from 'react';

let withLocal = (Comp, key) => {
    return class withLocal extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
        }

        componentDidMount() {
            this.setState({
                value: localStorage.getItem(key)
            })
        }

        render() {
            return <Comp {...this.props} keyWord={this.state.value} />
        }
    }

}

export default withLocal