import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BobsburgerInfo.module.css'

export function BobsburgerInfo() {
    const { id } = useParams()
    const [bobsburger, setBobsburger] = useState([])

    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
            .then(response => response.json())
            .then(data => {
                setBobsburger(data)
            })
    }, [id])


    return (
        <>
            <div className={styles.container}>

                <div className={styles.containerImage}>
                    <div className={styles.cardImage} style={{ backgroundImage: `url(${bobsburger.image})` }}></div>
                </div>

                <div className={styles.containerInfo}>

                    <div className={styles.infoName}>
                        {bobsburger.name}
                    </div>

                    <section>
                        <div className={styles.infoGender}>
                            Gender:
                        </div>
                        <div>
                            {bobsburger.gender}
                        </div>
                    </section>

                    <section>
                        <div className={styles.infoAge}>
                            Age:
                        </div>
                        <div>
                            {bobsburger.age}
                        </div>
                    </section>

                    <section>
                        <div className={styles.infoOccupation}>
                            Occupation:
                        </div>
                        <div>
                            {bobsburger.occupation}
                        </div>
                    </section>

                    <section>
                        <div className={styles.infoVoicedBy}>
                            Voiced By:
                        </div>
                        <div>
                            {bobsburger.voicedBy}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}