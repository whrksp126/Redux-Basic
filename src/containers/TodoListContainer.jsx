import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

// store를 연결하고 store에 있는
// state를 꺼내서 그 중 필요한 것을
// props로 넣어지는 일을 한다
function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
