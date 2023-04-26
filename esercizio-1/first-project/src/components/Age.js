function Age(props){
    return <div>
            {props.age
            ? <p>Your age is {props.age}</p>
            : <p>Insert an age</p>
            }
        </div>
}

export default Age;