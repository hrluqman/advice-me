import { TbPlayerTrackNext } from "react-icons/tb";

const Quote = ({advice, newAdvice}) => {
    return (  
        <div className="quote-content">
            <p className="exclaim">!</p>
            <h2>"{advice.advice}"</h2>
            <p>Advice #{advice.id}</p>
            <TbPlayerTrackNext onClick={newAdvice} />
        </div>
    );
}
 
export default Quote;