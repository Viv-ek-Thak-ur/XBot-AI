import suggestions from "../../Data/suggestion";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
import styles from "./SuggestionGrid.module.css";

function SuggestionGrid() {
  return (
  <div className={styles.suggestionGrid}>
    {suggestions.map((item)=>(
      <SuggestionCard
        key={item.id}
        title = {item.title}
        description={item.description}
      />
    ))}
  </div>);
}

export default SuggestionGrid;