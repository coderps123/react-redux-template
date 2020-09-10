/**
 * 包含 n个 reducer函数(根据老的state 和 action返回一个新的state)
 */
import { ADD, DEL, RECEIVE_COMMENTS } from "./action-types";
import { combineReducers } from "redux";

const initComments = [
  // {userName: '张三', content: 'React太难了, 我不会啊'},
  // {userName: '李四', content: 'js太难了, 我不会啊'},
  // {userName: '王五', content: '学习好累啊, 我太难了'},
  // {userName: '1', content: '222了'}
];

function comments(state = initComments, action) {
  switch (action.type) {
    case ADD:
      return [action.data, ...state];
    case DEL:
      return state.filter((comment, index) => action.data !== index);
    case RECEIVE_COMMENTS:
      return action.data;
    default:
      return state;
  }
}

function xxxx(state = 0, action) {
  return state
}

export default combineReducers({
  comments,
  xxxx
})
// 向外暴露的状态结构为: { comments = 不确定, xxxx = 0 } // state返回值
