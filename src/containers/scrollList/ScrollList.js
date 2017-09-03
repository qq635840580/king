import React, {Component} from 'react';

export default class ScrollList extends Component {
  constructor() {
    super()
    this.state = {flag: false}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.element && !this.state.flag) {

      nextProps.element.refs.scroll.addEventListener('scroll', () => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let {scrollTop, offsetHeight, scrollHeight} = nextProps.element.refs.scroll;
          if (scrollTop + offsetHeight + 40 > scrollHeight && this.props.hasMore && !this.props.isLoading) {
            this.props.loadMore();
          }
        }, 50)

      })
      this.setState({flag: true})
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
