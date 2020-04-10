import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
        console.log(this.props.match)
    }
    render() {
        return (
            <div>
                <h1>你来到了登录页面</h1>
                <h2>{this.state.id}</h2>
            </div>
        )
    }
}
export default Login;
