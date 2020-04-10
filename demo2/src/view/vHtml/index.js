import React, { Component } from 'react';
class HtmlIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['小姐姐', '小哲玛利亚'],
            val: ''
        }
    }
    deleteItem($i) {
        const arr = this.state.list
        arr.splice($i, 1)
        this.setState({
            list: arr
        })
    }
    addItem($i) {
        const arr = this.state.list
        const vla = this.state.val
        arr.push(vla)
        this.setState({
            list: arr
        }, () => {
            console.log("li:::", this.ul.querySelectorAll('li').length)
        })
    }
    onChangeIpt(e) {
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>JSX 的HTML格式的解析问题</p>
                <ul ref={ul => this.ul = ul}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index + item}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    <input type="text" value={this.state.val} ref={(input) => { this.input = input }} onChange={this.onChangeIpt.bind(this)}
                        onBlur={this.addItem.bind(this)} />
                </p>
            </div>
        );
    }
}

export default HtmlIndex;