function DisplayInfo(props) {
    return<>
            <h2>Display info:</h2>
            {props.userArr.map(e => {
                return (
                    <>
                        <h4>{e.username}</h4>
                        <p>{e.password}</p>
                    </>
                )
            })}
            </>
}

export default DisplayInfo