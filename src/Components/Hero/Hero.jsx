import Logo from "../../assets/logo.svg";
import styles from "./Hero.module.css";


export default function Hero(){
    return(
        <section className={styles.hero}>
            <h1>How can I help you today?</h1>
        <img src={Logo} alt="Logo"  className={styles.logo}/>
        
        </section>
    )
}