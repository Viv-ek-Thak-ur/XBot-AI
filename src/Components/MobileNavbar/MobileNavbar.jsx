import styles from "./MobileBar.module.css";
import Menu from "../../assets/menu.svg";

export default function MobileNavbar(){
    return(
        <header className={styles.mobileNavbar}>
            <button type="submit" className={styles.menuBtn}>
                <img className={styles.menuIcon} src={Menu} alt="Menu" />
            </button>
            <h1 className={styles.navbarHeading}>Bot AI</h1>
        </header>

    );
}