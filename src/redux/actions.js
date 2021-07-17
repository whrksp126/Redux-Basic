// TODO list에 TODO를 넣는 action인 ADD_TODO라고 하는
// action에 type을 정의하도록함

// 문자열을 상수화 한것
// redusers.js에서 ADD_TODO를 사용하기 위해 export함
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// 액션생성 함수
// 액션생성자를 통해서 나오는 액션은
// {type: ADD_TODO, text: '할일'} 이런 형태일것이다
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_ALL };
}

export function showComplete() {
  return { type: SHOW_COMPLETE };
}
