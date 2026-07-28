import { useState } from "react";
import styles from "./FeedbackModal.module.css";

export default function FeedbackModal({
  onClose,
  onSubmit,
}) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
  if (rating === 0) {
    alert("Please provide a rating.");
    return;
  }

  onSubmit({
    rating,
    feedback,
  });
};

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Provide Feedback</h2>

        <p>Rate your experience</p>

        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= rating
                  ? styles.active
                  : styles.star
              }
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) =>
            setFeedback(e.target.value)
          }
        />

        <div className={styles.buttons}>
          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSubmit}>
            Submit & Save
          </button>
        </div>
      </div>
    </div>
  );
}