import { createStore } from "redux";
import { todoApp } from "./redusers";

const store = createStore(todoApp);

export default store;
