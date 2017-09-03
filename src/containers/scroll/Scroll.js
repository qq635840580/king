import React,{Component} from 'react';
import './index.less'
export default class Scroll extends Component{
    render(){
        return (
            <div className="scroll" ref="scroll">
              {this.props.children}
            </div>
        )
    }
}
