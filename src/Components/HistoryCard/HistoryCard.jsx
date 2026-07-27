import styles from "./HistoryCard.module.css";

export default function HistoryCard({ chat }) {
  const userMessage = chat.message.find(
    (msg) => msg.sender === "user"
  );

  const botMessage = chat.message.find(
    (msg) => msg.sender === "bot"
  );

  const time = new Date(chat.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.card}>
      <div className={styles.message}>
        <div className={styles.avatar}>👤</div>

        <div>
          <h3>You</h3>
          <p>{userMessage?.text}</p>
          <span>{time}</span>
        </div>
      </div>

      <div className={styles.message}>
        <div className={styles.avatar}>🤖</div>

        <div>
          <h3>Soul AI</h3>
          <p>{botMessage?.text}</p>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}