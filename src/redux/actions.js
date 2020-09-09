/**
 * 包含了所有的 action creator(action的工厂函数)
 */
import { ADD, DEL , RECEIVE_COMMENTS} from "./action-types";

// 同步添加
export const add = (comment) => ({ type: ADD, data: comment });
// 同步删除
export const del = (index) => ({ type: DEL, data: index });

// 同步接收 comments
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})

// 异步获取
export const getComments = () => {
  return (dispatch) => {
    // 模拟发送异步 ajax请求 异步获取数据
    setTimeout(() => {
      const comments = [
        { userName: "张三", content: "React太难了, 我不会啊" },
        { userName: "李四", content: "js太难了, 我不会啊" },
        { userName: "王五", content: "学习好累啊, 我太难了" },
      ];
      // 分发一个同步的 action
      dispatch(receiveComments(comments))
    }, 1000);
  };
};
