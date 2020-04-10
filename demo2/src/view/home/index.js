import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '这里是首页',
            list: [
                {
                    uid: 123,
                    title: 'jsguan 得个人博客————1'
                },
                {
                    uid: 456,
                    title: 'jsguan 得个人博客————2'
                },
                {
                    uid: 789,
                    title: 'jsguan 得个人博客————3'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={item.uid}><Link to={'/login/' + item.uid}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Home;
