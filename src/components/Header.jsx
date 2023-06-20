import styles from './Header.module.css';
import {Link} from "react-router-dom";

export function Header() {
    return (
        <header className={styles.header}>
            <div className="logo">
                <h1 className= {styles.title}></h1>
               <Link to ="/"> Bob's Burgers App </Link>
            </div>
        </header>
    )
}