import { useMemo } from "react"

function FilteredList(){

    const usersData = [
        {
            id: 1,
            name: 'Alfio',
            age: 32
        },
        {
            id: 2,
            name: 'Filippo',
            age: 14
        },
        {
            id: 3,
            name: 'Giovanna',
            age: 16
        },
        {
            id: 4,
            name: 'Graziella',
            age: 36
        },
        {
            id: 5,
            name: 'Antonio',
            age: 12
        },
        {
            id: 6,
            name: 'Carmelo',
            age: 76
        }
    ]

    const memoAdult = useMemo(() => usersData.filter(item => item.age >= 18), [usersData])

    return <>
            <ul>
                {memoAdult.map((element => {
                    return <li>{element.name} - {element.age}</li>
                    })
                )}
            </ul>
            </>
}

export default FilteredList