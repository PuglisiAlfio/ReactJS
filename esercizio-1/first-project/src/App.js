import TodoList from './components/TodoList';
import './App.css';
import { useState } from 'react';

function App() {

  const arrNames = ['Alfio', 'Andrea', 'Manfredi'];

  const [currentList, setCurrentList] = useState(arrNames)
  return <div>
          <TodoList name = {currentList} setList = {setCurrentList}/>
        </div>
}

export default App;
