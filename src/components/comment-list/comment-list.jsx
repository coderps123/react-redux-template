import React from 'react'
import PropTypes from 'prop-types'

export default class CommentList extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
  }

  handleDel = (index) => {
    this.props.del(index)
  }

  render() {
    return (
      <ul>
        {
          this.props.comments.map((item, index) => {
            return (
              <li key={index} style={{border: '1px #999 solid', position: 'relative', margin: '10px 0'}}>
                <h3>{item.userName}:</h3>
                <span>{item.content}</span>
                <button style={{position: 'absolute', top: '0', right: '0'}} 
                onClick={() => {this.handleDel(index)}}>删除</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


