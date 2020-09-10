import React from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {add, del, getComments} from "../../redux/actions" 

import CommentList from '../../components/comment-list/comment-list'
import AddCommentItem from '../../components/add-comment/add-comment'

class App extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getComments()
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     const comments = [
  //       {userName: '张三', content: 'React太难了, 我不会啊'},
  //       {userName: '李四', content: 'js太难了, 我不会啊'},
  //       {userName: '王五', content: '学习好累啊, 我太难了'}
  //     ]
  //     this.setState({comments})
  //   }, 1000);
  // }

  // add = (comment) => {
  //   const {comments} = this.state
  //   comments.unshift(comment)
    
  //   this.setState({comments})
  // }

  // 删除item项
  // del = (index) => {
  //   const {comments} = this.state
  //   comments.splice(index, 1)

  //   this.setState({comments})
  // }

  render() {
    const {comments, add, del} = this.props
    return (
      <div className="App">
        <header className="header">
          <div className="w"><h1>请发表对React的评论</h1></div>
        </header>
        <AddCommentItem add={add} />
        <h2 style={{ display: comments.length === 0 ? 'block' : 'none' }}>暂无评论!</h2>
        <CommentList comments={comments} del={del}/>
      </div>
    )
  }
}
export default connect(
  state => {
    return {
      comments: state.comments,
      xxxx: state.xxxx
    }
  },
  {add, del, getComments}
)(App)
