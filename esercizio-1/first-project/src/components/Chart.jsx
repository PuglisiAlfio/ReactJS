function Chart(props) {
    return <>
           <h1>Carrello</h1>
           {props.arr.map((item, id) => { 
           return <li key={id}>{item.name} {item.price}</li> })}

           <h4>Total: {Math.round(props.totalExpense)}€</h4>
            </>
}

export default Chart