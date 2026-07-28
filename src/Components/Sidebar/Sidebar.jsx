import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import chatIcon from "../../assets/edit.svg";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={logo} alt="Logo" className={styles.icon} onClick={()=>(navigate("/"))}/>
                <p>New Chat</p>
                <button type="submit" className={styles.chatBtn}>
                    <img src={chatIcon} alt="Chat" className={styles.chatIcon} onClick={()=>(navigate("/"))}/>
                </button>
            </div>
            <div className={styles.history}>
                <button type="submit" className={styles.historyBtn} onClick={()=>(navigate("/history"))}>Past Conversation</button>
            </div>
        </div>
    );
}