import styles from "./ChatInput.module.css";

function ChatInput({ value, onChange, onAsk ,onSave}) {
   const handleSubmit = (e) => {
    e.preventDefault();
    onAsk();
  };
  return (
    <form className={styles.chatInput} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder='Message Bot AI...'
        className={styles.input}
      />
      <button type="submit"  className={styles.btn}>
        Ask
      </button>
      <button type="button" className={styles.btn} onClick={onSave}>
        Save
      </button>
    </form>
  );
}

export default ChatInput;
