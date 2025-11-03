import { useState } from 'react';

function Summary ({title, reps, sets, desc}) {
    return (
        <>
        
        <div className={"infoBox"}>A new exercise has been added to the database:</div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{`Do ${String(reps)} reps, for ${String(sets)} sets.`}</p>
        </>
    )
}

export function NewExercise() {
    
    const [newExData, setNewExData] = useState(null);
    // set state object with form data
    // set another state object to toggle whether valid form data has been submitted
    // write an alternative ui to return when the form data is successfully submitted
    // that ui should have the option to go back tot he form if the user wants to 
    // enter another exercise
    const saveNewExercise = (e) => {
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        setNewExData(formJson);
    }
    const formUI = (
        <form method="post" onSubmit={ saveNewExercise }>
                <label>Exercise Name: 
                    
                </label>
                <input className="titleEntry" name="exerciseTitle"/>
                <hr/>
                
                <label>Number of Reps: 
                    <input className="numEntry" name="numReps"/>
                </label>
                <hr />
                <label>Number of Sets: 
                    <input className="numEntry" name="numSets"/>
                </label>
                <hr />
                <label>Helpful Description:
                    <textarea className="textEntry" name="exDesc" rows={10} cols={40} />
                </label>
                <hr/>
                <button type="submit" className={"submitBtn"}>Save New Exercise</button>
            </form>
    );

    const closeSummary = () => setNewExData(null);

    if (newExData !== null) {
        return (
            <>
            <Summary title={newExData.exerciseTitle} 
                                           reps={newExData.numReps}
                                           sets={newExData.numSets}
                                           desc={newExData.exDesc} />
            <button onClick={closeSummary} value="closeSummary" >Close</button>
            </>
        )
    } else {
    return ( 
        <>  
            {formUI}
        
        </>
    )}
}