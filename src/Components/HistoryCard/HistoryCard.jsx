import styles from "./HistoryCard.module.css";
import logo from "../../assets/logo.svg";
import you from "../../assets/user.svg";

export default function HistoryCard({ chat, onClick }) {
  const userMessage = chat.message.find((msg) => msg.sender === "user");

  const botMessage = chat.message.find((msg) => msg.sender === "bot");

  const time = new Date(chat.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.card}>
      <div className={styles.message}>
        <div className={styles.avatar}>
          <img src={you} alt="User" />
        </div>

        <div>
          <h3>You</h3>
          <p>{userMessage?.text}</p>
          <span>{time}</span>
        </div>
      </div>

      <div className={styles.message}>
        <div className={styles.avatar}>
          <img src={logo} alt="Soul AI" />
        </div>

        <div>
          <h3>Soul AI</h3>
          <p>{botMessage?.text}</p>
          {chat.rating > 0 && (
            <p className={styles.rating}>
              {"★".repeat(chat.rating)}
              {"☆".repeat(5 - chat.rating)}
            </p>
          )}
          <span>{time}</span>
          

          {chat.feedback && <p className={styles.feedback}>{chat.feedback}</p>}
        </div>
      </div>
    </div>
  );
}
