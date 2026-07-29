import styles from "./MobileBar.module.css";
import Menu from "../../assets/menu.svg";

export default function MobileNavbar(){
    return(
        <div className={styles.mobileNavbar}>
            <button type="button"className={styles.menuBtn}>
                <img className={styles.menuIcon} src={Menu} alt="Menu" />
            </button>
            <h1 className={styles.navbarHeading}>Bot AI</h1>
        </div>

    );
}