import styles from "./MessageCard.module.css";
import userAvatar from "../../../assets/user.svg";
import botAvatar from "../../../assets/logo.svg";

export default function MessageCard({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={styles.messageCard}>
      <div className={styles.avatar}>
        <img
          src={isUser ? userAvatar : botAvatar}
          alt={isUser ? "User" : "Bot AI"}
        />
      </div>

      <div className={styles.content}>
        <h4 className={styles.name}>
          {isUser ? "You" : "Bot AI"}
        </h4>

        <p className={styles.text}>
          {message.text}
        </p>

        <div className={styles.footer}>
          {message.timestamp && (
            <span className={styles.time}>
              {message.timestamp}
            </span>
          )}

          {!isUser && (
            <div className={styles.actions}>
              <button className={styles.actionBtn}>👍</button>
              <button className={styles.actionBtn}>👎</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}