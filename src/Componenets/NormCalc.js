import React, { useState } from 'react';

// eslint-disable-next-line
export default function () {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.innerHTML));
    }

    const clear = () =>{
        setResult("");
    }

    const backSpace = () =>{
        setResult(result.slice(0, -1));
    }

    const calcualte = () =>{
        try {
            // eslint-disable-next-line
            setResult((eval(result)).toString());
        } catch (error) {
            setResult("Error");
        }
    }

    return (
        <>
            <input type="text" className="cal-screen" defaultValue={result} />
            <div className="cal-switches">
                <div className="cal-row">
                    <button className="Ncal-switch cal-equi" id="cal-switch1" onClick={clear}>C</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch2" onClick={backSpace}>Del</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch3" onClick={handleClick}>%</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch4" onClick={handleClick}>X</button>
                </div>
                <div className="cal-row">
                    <button className="Ncal-switch" id="cal-switch1" onClick={handleClick}>7</button>
                    <button className="Ncal-switch" id="cal-switch2" onClick={handleClick}>8</button>
                    <button className="Ncal-switch" id="cal-switch3" onClick={handleClick}>9</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch4" onClick={handleClick}>/</button>
                </div>
                <div className="cal-row">
                    <button className="Ncal-switch" id="cal-switch1" onClick={handleClick}>4</button>
                    <button className="Ncal-switch" id="cal-switch2" onClick={handleClick}>5</button>
                    <button className="Ncal-switch" id="cal-switch3" onClick={handleClick}>6</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch4" onClick={handleClick}>+</button>
                </div>
                <div className="cal-row">
                    <button className="Ncal-switch" id="cal-switch1" onClick={handleClick}>1</button>
                    <button className="Ncal-switch" id="cal-switch2" onClick={handleClick}>2</button>
                    <button className="Ncal-switch" id="cal-switch3" onClick={handleClick}>3</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch4" onClick={handleClick}>-</button>
                </div>
                <div className="cal-row">
                    <button className="Ncal-switch" id="cal-switch1" onClick={handleClick}>00</button>
                    <button className="Ncal-switch" id="cal-switch2" onClick={handleClick}>0</button>
                    <button className="Ncal-switch" id="cal-switch3" onClick={handleClick}>.</button>
                    <button className="Ncal-switch cal-equi" id="cal-switch4" onClick={calcualte}>=</button>
                </div>
            </div>

            {/* <Outlet/> */}
        </>
    )
}
