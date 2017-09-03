import React from 'react';
import img from '../News/img/111.png';
import img2 from '../News/img/222.png';
export default class TalkAbout extends React.Component{
    back=()=>{
        window.history.back();
    }
    render (){
        return(
            <div>
                <div className="header">
                    <i className="iconfont icon-back" onClick={this.back}></i>
                    <span>对话框</span>
                </div>
                <ul>
                    <li className="container sm clearfix">
                        <div className="picBox fl">
                            <img src={img} alt=""/>
                        </div>
                        <div className="txtBox fl">
                            <p className="txt">欢迎光临想变美就变美小屋，请问您是？</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fr">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="txtBox fr">
                            <p className="txt fr">马冬梅</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fl">
                            <img src={img} alt=""/>
                        </div>
                        <div className="txtBox fl">
                            <p className="txt">马什么梅</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fr">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="txtBox fr">
                            <p className="txt fr">马冬梅</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fl">
                            <img src={img} alt=""/>
                        </div>
                        <div className="txtBox fl">
                            <p className="txt">马冬什么？</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fr">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="txtBox fr">
                            <p className="txt fr">马冬梅</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fl">
                            <img src={img} alt=""/>
                        </div>
                        <div className="txtBox fl">
                            <p className="txt">什么冬梅</p>
                        </div>
                    </li>
                    <li className="container sm clearfix">
                        <div className="picBox fr">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="txtBox fr">
                            <p className="txt fr">滚，马不停蹄的滚~~</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}








