import { useEffect, useRef } from "react";

function CarDetails(props) {
    const carDetails = useRef('')
    const carName = useRef('')
    const carModel = useRef('')
    const carYear = useRef('')
    const carColor = useRef('')

    const onSubmit = (e) => {
      e.preventDefault()
      console.log([carName.current.value, carModel.current.value, carYear.current.value, carColor.current.value])
    }

    useEffect(() => {carDetails.current.reset();}, [props.initialData])

    return(
        <>
        <form ref={carDetails}>
          <input ref={carName} name="name" type="text" onChange={e => (e.target.value)} defaultValue={props.initialData.name}/>
          <input ref={carModel} name="model" type="text" onChange={e => (e.target.value)} defaultValue={props.initialData.model}/>
          <input ref={carYear} name="year" type="text" onChange={e => (e.target.value)} defaultValue={props.initialData.year}/>
          <input ref={carColor} name="color" type="text" onChange={e => (e.target.value)} defaultValue={props.initialData.color}/>
          <button type="submit" onClick={onSubmit}>Load</button>
        </form>
      </>
    )
}

export default CarDetails;