import React, {Component} from 'react';
import * as action from '../../redux/actions/home';
import {connect} from 'react-redux';
import Scroll from "../../containers/scroll/Scroll";

class Shopping extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      amount: 1,
    };
  }

  back = () => {
    window.history.back();
  };

  componentDidMount() {
    if (this.props.cars.carsList.length == 0) {
      this.props.getCar();
    }

  }

  handelChange = () => {
    this.setState({flag: !this.state.flag})
  };
  add = (id) => {
    this.props.increase(id);
  };
  del = (id) => {
    this.props.decrease(id);
  };
  handelFile = (id) => {
    this.props.delTodos(id)
  };

  render() {
    // console.log(this.props.activeCount);
    return (
      <div className="car">
        <Scroll>
          <div className="header">
            <i className="iconfont icon-back" onClick={this.back}></i>
            <span>购物车{this.props.cars.carsList.length}件</span>
            <span className="write" onClick={this.handelChange}>{this.state.flag ? '完成' : '编辑'}</span>
          </div>
          <div className="body">
            {
              this.props.cars.carsList.length ?
                this.props.cars.carsList.map((item, index) => (
                  <div className="body-con" key={index}>
                    <div className="check">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onClick={() => this.props.toggleTodo(item.id)}
                      />
                    </div>
                    <div className="body-left">
                      <img src={item.url} alt=""/>
                    </div>
                    {
                      this.state.flag == false ?
                        <div className="body-right">
                          <span className="text">{item.text}</span>
                          <span className="style">{item.style}</span>
                          <span className="bot">
                                                <p className="bot-left">{item.price}</p>
                                                <p className="bot-right">×{item.number}</p>
                                            </span>
                        </div> :
                        <div className="body-change">
                          <div className="right">
                            {
                              item.number > 0 ?
                                <button className="btn" onClick={() => this.del(item.id)
                                }>-</button>
                                : <div className="two">
                                  <button className="btn btn-two">-</button>
                                  <span className="waring">亲！该宝贝不能再少了</span></div>
                            }
                            <span className="num">{item.number == 0 ? 1 : item.number}</span>
                            <button className="btn" onClick={() => this.add(item.id)}>+</button>
                          </div>

                          <p className="style">{item.style}</p>
                          <div
                            className="del"
                            onClick={() => this.handelFile(item.id)}
                          >删除
                          </div>
                        </div>
                    }

                  </div>
                )) :
                <div>正在加载中....</div>
            }
          </div>
          <div className="footer">
                    <span className="check"><input
                      type="checkbox"
                      onClick={event => this.props.toggleAll(event.target.checked)}
                      checked={this.props.activeCount != 0 ? false : true}
                    />{this.props.activeCount == 0 ? '取消' : '全选'}</span>
            <span className="add" ref="add">合计：￥{this.props.activePrice}</span>
            <span className="end">结算{this.props.activePrice}</span>
          </div>
        </Scroll>
      </div>
    )
  }
}

export default connect(state => ({
  ...state,
  activeCount: state.cars.carsList.reduce((prev, next) => {
    return prev + Number(!next.checked)
  }, 0),
  activePrice: state.cars.carsList.reduce((prev, next) => {
    let {checked, number, price} = next || {};
    if (checked) {
      return prev + price * number;
    } else {
      return prev + 0;
    }
  }, 0)
}), action)(Shopping)
import './index.less'