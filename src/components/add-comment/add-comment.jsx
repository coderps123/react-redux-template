import React from 'react'
import PropTypes from 'prop-types'

export default class AddCommentItem extends React.Component {

  state = {
    comment: {
      userName: '',
      content: ''
    }
  }

  static propTypes = {
    add: PropTypes.func
  }

  handleSubmit = () => {
    // 1. 收集数据, 并封装
    const comment = {
      userName: this.userNameInput.value.trim(),
      content: this.contentTextArea.value.trim()
    }
    if (comment.userName !== "" && comment.content !== "") {
      // 2. 调用父级函数 实现添加功能
      this.props.add(comment)
      this.userNameInput.value = ""
      this.contentTextArea.value = ""
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this.userNameInput = input}/>
        <textarea name="" id="" cols="30" rows="10" ref={textarea => this.contentTextArea = textarea}></textarea>
        <button onClick={this.handleSubmit}>提交</button>
      </div>
    )
  }
}