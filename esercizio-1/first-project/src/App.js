import TodoList from './components/TodoList';
import './App.css';

function App() {

  const arrNames = ['Alfio', 'Andrea', 'Manfredi'];

  return <div>
          <TodoList name = {arrNames}/>
        </div>
}

export default App;
