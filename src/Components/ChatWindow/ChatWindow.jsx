import styles from "./Chatwindow.module.css";
import MessageCard from "./MessageCard/MessageCard";

export default function ChatWindow({ message,onFeedback }) {
 
  return (
    <div className={styles.chatWindow}>
      {message.map((message,index) => (
        <MessageCard
          message={message}
          index={index}
          key={index}
          onFeedback={onFeedback}
        />
      ))}
    </div>
  );
}
