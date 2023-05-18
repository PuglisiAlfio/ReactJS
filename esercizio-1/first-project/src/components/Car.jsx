import CarDetails from "./CarDetails"

function Car() {

    let initialData = {
        name: "Fiat",
        model: "Panda",
        year: "1999",
        color: "Verde"
    }

    return <CarDetails initialData={initialData}/>
}
export default Car