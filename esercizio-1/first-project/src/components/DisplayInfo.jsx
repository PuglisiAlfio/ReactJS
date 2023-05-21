
function DisplayInfo(props) {
    
    return<>
            <h2>Display info:</h2>
            {props.userArr.map(e => {
                return (
                    <>
                        {e.username && <h4>name: {e.username}</h4>}
                        {e.password && <p>password: {e.password}</p>}
                    </>
                )
            })}
            </>
}

export default DisplayInfo