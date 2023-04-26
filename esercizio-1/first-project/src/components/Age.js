function Age(props){
    return <div>
            {props.age >= 18 && props.age <= 65
            ? <p>Your age is {props.age}</p>
            : <p>Insert a valid age, between 18 and 65</p>
            }
        </div>
}

export default Age;