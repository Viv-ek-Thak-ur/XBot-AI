import styles from "./MessageCard.module.css";
import userAvatar from "../../../assets/user.svg";
import botAvatar from "../../../assets/logo.svg";
import like from "../../../assets/like.svg";
import dislike from "../../../assets/dislike.svg";

export default function MessageCard({ message , onFeedback, index}) {
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
          {message.createdAt && (
            <span className={styles.time}>
              {message.createdAt}
            </span>
          )}

          {!isUser && (
            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={()=>onFeedback(index,"like")}><img src={like} alt="like"/></button>
              <button className={styles.actionBtn} onClick={()=>onFeedback(index,"dislike")}><img src={dislike} alt="dislike"/></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}