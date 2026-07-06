import Header from "./component/Header";
import Footer from "./component/Footer";
import TodoList from "./component/TodoList";
import TodoItem from "./component/TodoItem";


export default function App() {
  return (
    <div>
      <Header />
      <h1>Todo List 입니다.</h1>
      <TodoList />
      <TodoItem />
      <Footer />
    </div>
  );
}