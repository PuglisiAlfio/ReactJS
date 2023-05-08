import { useState } from 'react';
import Chart from './components/Chart';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 15.99 },
  { id: 4, name: 'Product 4', price: 8.99 },
  { id: 5, name: 'Product 5', price: 12.99 },
];


function App() {
  const [cartItems, setCartItems] = useState([]);
  
  //con parametro perché devo aggiungere l'elemento ad un array
  function handleClick(item) {
    setCartItems([...cartItems, item])
    console.log(cartItems)
  }

  const totalExpense = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

  return <div>
          <h2>Lista prodotti</h2>
          {products.map((item, id) => {
            return <>
                    <li key = {id}>{item.name} - {item.price}</li>
                    <button onClick={() => handleClick(item)}>Aggiungi al Carrello</button>
                  </>
            }
          )}
          <br />
          <Chart arr={cartItems} totalExpense={totalExpense}/>
        </div>
}

export default App;
