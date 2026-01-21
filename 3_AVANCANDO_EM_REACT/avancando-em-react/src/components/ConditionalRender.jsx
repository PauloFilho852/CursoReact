import { use } from "react";
import { useState } from "react";

const ConditionalRender = () => {

    const [state, setState] = useState(true);
    const [name] = useState("João");
    
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Também pode renderizar isso!</h1>;
        }
    };

    return (
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
            {state && <h1>O state é verdadeiro!</h1>}
            {!state && <h1>O state é falso!</h1>}
            <button onClick={() => setState(!state)}>Mudar state</button>
            <div>
                {name === "João" ? (
                    <h1>O nome é João!</h1>
                ) : (
                    <h1>O nome não é João!</h1>
                )}
            </div>
        </div>
       
    );
  
}
export default ConditionalRender;