import styles from "./SuggestionCard.module.css";
export default function SuggestionCard({title, description}){

    return(
        <div className={styles.suggestionCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}