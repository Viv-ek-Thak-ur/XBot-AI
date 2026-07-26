import Logo from "../../assets/logo.svg";
import styles from "./Hero.module.css";


export default function Hero(){
    return(
        <section className={styles.hero}>
            <p>How can I help you today?</p>
        <img src={Logo} alt="Logo"  className={styles.logo}/>
        
        </section>
    )
}