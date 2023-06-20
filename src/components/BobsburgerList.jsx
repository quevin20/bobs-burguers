import { useEffect, useState } from "react"
import { BobsburgerCard } from "./BobsburgerCard";
import styles from "./BobsburguerList.module.css"
import { Search } from "./Search"

export function BobsburgerList() {

    const [bobsburgers, setBobsburgers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        fetch("https://bobsburgers-api.herokuapp.com/characters/")
            .then(response => response.json())
            .then(data => {
                const sortedBobsburgers = data.sort((a, b) => a.name.
                    localeCompare(b.name))
                setBobsburgers(sortedBobsburgers)
                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const filteredBobsburgers = bobsburgers.filter(bobsburger => bobsburger.name.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase())
    }

    if (loading) {
        return <div>Loading</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <Search
                    total={filteredBobsburgers.length}
                    search={getSearchValue}
                />

                <div className={styles.container}>
                    {filteredBobsburgers.map(bobsburger => (

                        <BobsburgerCard
                            key={bobsburger.id}
                            id={bobsburger.id}
                            image={bobsburger.image}
                            name={bobsburger.name}
                        />

                    ))}
                </div>
            </>
        )
    }
}