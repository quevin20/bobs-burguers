import { Link } from "react-router-dom";
import styles from './BobsburgerCard.module.css'

export function BobsburgerCard({ id ,image, name}) {

    return (
        <Link to={`/bobsburger/${id}`}>
        <div className="card">

            <div className={styles.cardImage} style={{backgroundImage: `url(${image})`}}>
            </div>
            
            <div className={styles.cardName}>
                {name}
            </div>
        </div>
        </Link>
    )
}