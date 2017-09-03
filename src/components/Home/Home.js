import React, {Component} from 'react';
import ReactSwipe from 'react-swipe'
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import './home.less'
import {Link} from 'react-router-dom'
import Scroll from "../../containers/scroll/Scroll";
import ScrollList from "../../containers/scrollList/ScrollList";

class Home extends Component {
  constructor() {
    super();
    this.state = {index: 0}
  }

  componentDidMount() {
    if(this.props.home.index.indexLists==0){
      this.props.getSlider();
      this.props.getList();
    }

  }
  loadMore =() => {
    this.props.getList();
  };

  render() {
    let {hasMore, isLoading, indexLists} = this.props.home.index;
    let opts = {
      continuous: true,
      callback: (index) => {
        this.setState({index: index})
      },
      auto: 3000
    };

    return (
      <div>
        <div className="top-input">
          <i className="iconfont icon-wefill"></i>
          <div className="input-box">
            <input type="text" placeholder="请输入你想要搜索的商品..."/>
          </div>
        </div>
        <Scroll ref="scroll">
          <div className="swiper">
            {this.props.home.sliders.length ? <ReactSwipe className="carousel" swipeOptions={opts}>
              {this.props.home.sliders.map((item, index) => (
                <div key={index}>
                  <img src={item} alt=""/>
                </div>
              ))}
            </ReactSwipe> : <div>正在疯狂加载</div>}
            <div className="dots">
              {this.props.home.sliders.map((item, index) => (
                <span key={index} className={index === this.state.index ? 'active' : ''}>
            </span>
              ))}
            </div>
          </div>
          <div className="nav">
            <i className="iconfont icon-tian"></i>
            <i className="iconfont icon-tian"></i>
            <i className="iconfont icon-ju"></i>
            <i className="iconfont icon-hua"></i>
            <i className="iconfont icon-suan"></i>
          </div>
          <div className="title001"><i className="iconfont icon-wefill"></i><h3>商品列表</h3></div>
          <ScrollList element={this.refs.scroll}
                      isLoading={isLoading}
                      hasMore={hasMore}
                      loadMore={this.loadMore}
          >
          {indexLists.length ? indexLists.map((item, index) => (
              <div className="list-01" key={index}>
                <Link to={{pathname: '/detail', state: item}} className="list-left">
                  <img src={item.url} alt=""/>
                </Link>
              </div>
            )) : <div>正在加载中...</div>}
          </ScrollList>
        </Scroll>
      </div>

    )
  }
}

export default connect(state => ({...state}), action)(Home)
