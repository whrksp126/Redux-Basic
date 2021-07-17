// actions.js에 있는 ADD_TODO를 사용하기 위해 import를 사용
import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";

// state
// ['코딩', '점심먹기']
// 하나의 todo는 문자열이 아닌 객체로 바꾸도록 함
// done이라는 프로퍼티를 추가해서 초기값으로 false를 넣어줌
// [{text:'코딩', done: false}, {text:'점심먹기', done: false}]

// {todos:[{text:'코딩', done: false}, {text:'점심먹기', done: false}], filter: 'ALL'}
const initialState = { todos: [], filter: "ALL" };

// 리듀스 함수
export function todoApp(previousState = initialState, action) {
  // 초기값 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  // 초기값이 설정된 상태에서
  // action이 들어왔는데 action의 type이 ADD_TODO면 {}를 실행하겠다
  if (action.type === ADD_TODO) {
    return {
      // 기존의 가지고 있던 값을 그대로 줘야하기 때문에(filter)
      ...previousState,
      // ...previousState 한 다음 todos를 덮어 쒸움
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }

  if (action.type === COMPLETE_TODO) {
    // 새로운 객체를 리턴한다
    // 기존의 배열중에서 action.index번째에 있는 요소를 얻어서
    // 그 요소에 done을 true로 바꿔주고 새로 만들면 됨

    // previousState를 돌면서 map으로 todo와 index를 꺼내겠습니다
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        // 만약에 index가 action.index와 같다면 뭔가
        // 새로운걸 만들어서 줘야함
        if (index === action.index) {
          // ...todo와 done을 true로 변경해줌
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: "COMPLETE",
    };
  }

  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: "ALL",
    };
  }

  return previousState;
}
