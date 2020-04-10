import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import './index.css'

function IShow(props) {
    return (
        <div className={props.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
    )
}
class RefIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
            inputValue: '',
            list: [{
                name: '波多野结衣', id: 1
            }]
        }
        this.toToggole = this.toToggole.bind(this);
    }
    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    inputChange(e) {

        this.setState({
            inputValue: e.target.value
        })
    }
    handleAdd() {
        let val = this.state.inputValue
        let arr = this.state.list
        arr.push({
            name: val
        })
        this.setState({
            list: arr
        })
    }
    deleteItem($index) {
        console.log("$index::", $index)
        let arr = this.state.list
        arr.splice($index, 1)
        this.setState({
            list: arr
        }, () => {
            //关键代码 -------------- start
            console.log("li:::", this.ul.querySelectorAll('li').length)
            //关键代码 -------------- end
        })
    }
    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => { console.log('axios 获取数据成功:', res) })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }
    render() {
        const inputValue = this.state.inputValue
        return (
            <div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, $index) => {
                            return (
                                <li
                                    key={$index + 'q'}
                                    onClick={this.deleteItem.bind(this, $index)}
                                >{item.name}</li>

                            )
                        })
                    }
                </ul>
                <p>ref 的使用:::{inputValue} </p>
                <p>
                    <input
                        id="jspang"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        onBlur={this.handleAdd.bind(this)}
                        //关键代码——----------start
                        ref={(input) => { this.input = input }}
                    //关键代码------------end
                    />
                </p>
                <p><button onClick={this.toToggole}>召唤</button></p>
                <IShow isShow={this.state.isShow} />
            </div>
        );
    }
}


// 对props 传值 进行验证
RefIndex.propTypes = {
    // name: PropTypes.string.isRequired,
    name: PropTypes.string,
};

export default RefIndex;