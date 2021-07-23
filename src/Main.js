import React, {useState} from 'react';

function Main() {

    const [counter, setCounter] = useState(0);

    function plus() {
        setCounter(counter+1)
    }

    function minus() {
        setCounter(counter-1)
    }

    function reset() {
        setCounter(0)
    }

    return (
        <>
       <div>
           {counter}
       </div>
        <div className={'buttons'}>
            <button className={plus} onClick={plus}>плюс</button>
            <button className={minus} onClick={minus}>минус</button>
            <button className={reset} onClick={reset}>сброс</button>
        </div>
    </>
    );
}
export default Main;