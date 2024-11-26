import './App.css';
import { Provider } from "react-redux";
import store from "./store";  
import Todo from './pages/todo';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
