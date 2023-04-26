function Age(props){
    return <div>
            {props.age > 18
            ? <p>Your age is {props.age}</p>
            : <p>Your are younger than 18 years old</p>
            }
        </div>
}

export default Age;