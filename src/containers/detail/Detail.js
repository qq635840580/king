import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'

export default class Detail extends Component {
  componentWillMount(){
    if(!this.props.location.state){
      this.props.history.push('/')
    }
  }
  render() {
    let {url, money, title, number} = this.props.location.state || {};
    return (
      <div>
        <div className="top-nav">
          商品详情
        </div>
        <div className="imgBox">
          <img src={url} alt=""/>
        </div>
        <div className="title">
          {title}
        </div>
        <div className="money">
          <span className="jiage">价格:{money}</span>
          <span className="shuliang">数量:{number}</span>
        </div>
        <div className="footer1">
          <Link to={'/shopping'}>加入购物车</Link>
        </div>
      </div>
    )
  }
}
