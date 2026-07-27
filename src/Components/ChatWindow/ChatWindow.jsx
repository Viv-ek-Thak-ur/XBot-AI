import styles from "./Chatwindow.module.css";
import MessageCard from "./MessageCard/MessageCard";

export default function ChatWindow({ message }) {
  const chat = message.message;
  return (
    <div className={styles.chatWindow}>
      {chat.map((message,index) => (
        <MessageCard
          message={message}
          key={index}
        />
      ))}
    </div>
  );
}
