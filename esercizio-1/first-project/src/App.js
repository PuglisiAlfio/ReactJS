import TodoList from './components/TodoList';
import './App.css';

function App() {

  const arrNames = ['Alfio', 'Andrea', 'Manfredi'];

  return <div>
          <TodoList name = {arrNames}>

            </TodoList>
        </div>
}

export default App;