import "./App.css";
import Filter from "./components/filter";
import FormSearch from "./components/form_search";
import ListTodo from "./components/list_todo";

function App() {
  return (
    <div className="container">
      <h1 className="title">TODO</h1>
      <FormSearch />
      <Filter />
      <ListTodo />
    </div>
  );
}

export default App;