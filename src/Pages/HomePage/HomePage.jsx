import { useNavigate } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import SuggestionGrid from "../../Components/SuggestionGrid/SuggestionGrid";
import ChatInput from "../../Components/ChatInput/ChatInput";
import styles from "./HomePage.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import { useState } from "react";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";
import FeedbackModal from "../../Components/FeedbackModal/FeedbackModal";
import useChat from "../../Utils/usechat";

export default function HomePage() {
  const navigate = useNavigate();
  const [savedChatId, setSavedChatId] = useState(null);
  const {
    question,
    message,
    setMessage,
    showModal,
    setShowModal,
    handleChange,
    handleAsk,
    handleFeedback,
    saveChat,
    updateChat,
  } = useChat();

  const handleFeedbackSubmit = ({ rating, feedback }) => {
    updateChat(savedChatId, {
      rating,
      feedback,
    });

    setShowModal(false);

    alert("Chat Saved");

    navigate("/history");
  };

  return (
    <>
      <main className={styles.home}>
        <div className={styles.mobileNavbar}>
          <MobileNavbar />
        </div>
        <div className={styles.desktopHome}>
          <div className={styles.left}>
            <Sidebar />
          </div>
          <div className={styles.right}>
            <header className={styles.rightHeader}>
              <h1>Bot AI</h1>
            </header>
            <div className={styles.rightContent}>
              {message.length === 0 && (
                <>
                  <Hero />
                  <SuggestionGrid />
                </>
              )}
              {message.length > 0 && (
                <>
                  <ChatWindow message={message} onFeedback={handleFeedback} />
                </>
              )}

              <ChatInput
                value={question}
                onChange={handleChange}
                onAsk={handleAsk}
                onSave={() => {
                  const id = saveChat({
                    rating: null,
                    feedback: "",
                  });

                  if (!id) return;

                  setSavedChatId(id);
                  setShowModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <FeedbackModal
          onClose={() => setShowModal(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </>
  );
}
