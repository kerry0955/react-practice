import React from 'react';
class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "这是一个404页面"
        }
    }
    render() {
        return (
            <h1>{this.state.msg}</h1>
        );
    }
}
export default ErrorPage;
