import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import promise from "redux-promise-middleware";

//==============================================
// // 미들웨어는 function이다, store를 인자로 받을 수 있음
// function middleware1(store) {
//   console.log("middleware1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next);
//     // next를 인자로 받는 함수에도 return이 있고 action을 인자로 받음
//     // action이 dispatch될 때마다 아래 내용이 다시 불림
//     return (action) => {
//       console.log("middleware1", 2);
//       // next라는 함수를 실행할 때 인자로는 받은 action을 인자로 넣어줌
//       // next를 실행한 결과물이 returnValue라고 함
//       const returnValue = next(action);
//       console.log("middleware1", 3);
//       // returnValue를 마지막에 return해줍니다.
//       return returnValue;
//     };
//   };
// }
// function middleware2(store) {
//   console.log("middleware2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next);
//     return (action) => {
//       console.log("middleware2", 2);
//       const returnValue = next(action);
//       console.log("middleware2", 3);
//       return returnValue;
//     };
//   };
// }

// //                                applyMideeleware라는 리덕스 함수를 가져와서
// //                                그 함수를 사용해서 순서대로 middleware를 넣어주면됨
// const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));

// export default store;
//=====================================================

const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
