import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="p-3">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
