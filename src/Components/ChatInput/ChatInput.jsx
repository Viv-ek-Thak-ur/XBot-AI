import styles from "./ChatInput.module.css";

function ChatInput({ value, onChange, onAsk ,onSave}) {
  return (
    <div className={styles.chatInput}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        type="text"
        placeholder='Message Bot AI...'
        className={styles.input}
      />
      <button type="submit" onClick={onAsk} className={styles.btn}>
        Ask
      </button>
      <button type="button" className={styles.btn} onClick={onSave}>
        Save
      </button>
    </div>
  );
}

export default ChatInput;
