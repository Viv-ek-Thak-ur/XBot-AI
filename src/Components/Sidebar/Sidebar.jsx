import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import chatIcon from "../../assets/edit.svg";
export default function Sidebar(){
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={logo} alt="Logo" className={styles.icon}/>
                <p>New Chat</p>
                <button type="submit" className={styles.chatBtn}>
                    <img src={chatIcon} alt="Chat" className={styles.chatIcon}/>
                </button>
            </div>
            <div className={styles.history}>
                <button type="submit" className={styles.historyBtn}>Past Conversation</button>
            </div>
        </div>
    );
}