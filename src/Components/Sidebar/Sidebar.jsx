import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import chatIcon from "../../assets/edit.svg";
import { Link } from "react-router-dom";

export default function Sidebar(){
    
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <Link to="/">
                <img src={logo} alt="Logo" className={styles.icon} />
                </Link>
                <Link to="/">
                <p>New Chat</p>
                </Link>
               
                <Link className={styles.chatBtn} to="/">
                
                    <img src={chatIcon} alt="Chat" className={styles.chatIcon}/>
                </Link>
            </div>
            <div className={styles.history}>
                <Link className={styles.historyBtn} to="/history">Past Conversations</Link>
            </div>
        </div>
    );
}