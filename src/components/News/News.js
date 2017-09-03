import React, {Component} from 'react';
import './new.less';
import img from './img/111.png';
import {Link} from 'react-router-dom';
import Scroll from "../../containers/scroll/Scroll";
export default class News extends Component {
    back=()=>{
        window.history.back();
    }
    render() {
        return (
            <div>
              <Scroll>
                <div className="header">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <span>消息</span>
                </div>
                <ul>
                    <li className="container clearfix">
                        <Link to={'/talkabout'}>
                            <div className="picBox fl">
                                <img src={img} alt=""/>
                            </div>
                            <div className="txtBox fl">
                                <p className="clearfix">
                                    <span className="fl">客服1号小刘</span>
                                    <span className="fr">2017-05-04</span>
                                </p>
                                <p className="txt">亲，请问您需要包邮吗？可以再打个折吗？</p>
                            </div>
                        </Link>
                    </li>
                    <li className="container clearfix">
                        <Link to={'/talkabout'}>
                            <div className="picBox fl">
                                <img src={img} alt=""/>
                            </div>
                            <div className="txtBox fl">
                                <p className="clearfix">
                                    <span className="fl">客服1号小刘</span>
                                    <span className="fr">2017-05-04</span>
                                </p>
                                <p className="txt">亲，请问您需要包邮吗？可以再打个折吗？</p>
                            </div>
                        </Link>
                    </li>
                    <li className="container clearfix">
                        <Link to={'/talkabout'}>
                            <div className="picBox fl">
                                <img src={img} alt=""/>
                            </div>
                            <div className="txtBox fl">
                                <p className="clearfix">
                                    <span className="fl">客服1号小刘</span>
                                    <span className="fr">2017-05-04</span>
                                </p>
                                <p className="txt">亲，请问您需要包邮吗？可以再打个折吗？</p>
                            </div>
                        </Link>
                    </li>
                    <li className="container clearfix">
                        <Link to={'/talkabout'}>
                            <div className="picBox fl">
                                <img src={img} alt=""/>
                            </div>
                            <div className="txtBox fl">
                                <p className="clearfix">
                                    <span className="fl">客服1号小刘</span>
                                    <span className="fr">2017-05-04</span>
                                </p>
                                <p className="txt">亲，请问您需要包邮吗？可以再打个折吗？</p>
                            </div>
                        </Link>
                    </li>
                </ul>
              </Scroll>
            </div>
    )
  }
}
