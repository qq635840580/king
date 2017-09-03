import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import {getLesson} from "../../redux/actions/home";
import * as action from '../../redux/actions/home'
import Scroll from "../../containers/scroll/Scroll";
class Run extends Component{
  componentDidMount(){
    if(this.props.run.Lists.length==0){
      this.props.getLesson();
    }

  }
  changeLike=(like,index)=>{
    console.log(like);
    this.props.addLike(like,index)
    alert('您已点赞 谢谢！')
  };
  addPerson=(person,index)=>{
    console.log(person);
    person+=1;
    this.props.addPerson(person,index)
  };
  render(){
    let result=this.props.run.Lists;
    console.log(result);
    return (
      <div>
        <div className="header">
          <span>好友动态</span>
        </div>
        <Scroll>
        <div className="list">
          {
            result? result.map((item,index)=>{
              return(
                <div className="test1" key={index}>
                  <span>{item.title}</span>
                  <img onClick={()=>this.addPerson(item.person,index)} src={item.url} alt=""/>
                  <div>
                    <i className="iconfont icon-attention">{item.person}</i>
                    <i className="iconfont icon-appreciate" onClick={()=>this.changeLike(item.like,index)}>{item.like}</i>
                    <i className="iconfont icon-message" id="test2">111</i>
                  </div>
                </div>
              )}):<div>正在加载</div>
          }
        </div>
      </Scroll>
      </div>
    )
  }
}
export default connect(state => ({...state}),action)(Run);