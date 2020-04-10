import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
// 加载不出来
// import { ReactComponent as Logo } from './logo.svg';


function BoilingVerdict(props) {
    // console.log('props:::', props)
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }
    //两次props对比// 子组件中 控制render dom 得次数
    shouldComponentUpdate(nextProps, nextState) {
        console.log("nextState::;", nextState)
        console.log("nextProps::;", nextProps)
        console.log("thsi.state::;", this.state)
        // return nextState.temperature === this.props.a ? false : true
        return true
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default Form
