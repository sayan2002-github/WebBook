import React, { useState } from 'react'

export default function () {
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        if (e.target.innerHTML === 'sin') {
            setDisplay(display.concat(e.target.innerHTML + '('));
            setResult(result.concat('Math.sin('));
        } else if (e.target.innerHTML === 'cos') {
            setDisplay(display.concat(e.target.innerHTML + '('));
            setResult(result.concat('Math.cos('));
        } else if (e.target.innerHTML === 'tan') {
            setDisplay(display.concat(e.target.innerHTML + '('));
            setResult(result.concat('Math.tan('));
        } else if (e.target.innerHTML === 'ln') {
            setDisplay(display.concat(e.target.innerHTML + '('));
            setResult(result.concat('Math.log('));
        } else if (e.target.innerHTML === 'log') {
            setDisplay(display.concat(e.target.innerHTML + '('));
            setResult(result.concat('Math.log10('));
        } else if (e.target.name === 'z') {
            setDisplay(display.concat(e.target.innerHTML));
            setResult(result.concat(e.target.name));
        } else if (e.target.name === 'p') {
            setDisplay(display.concat(e.target.innerHTML));
            setResult(result.concat('Math.PI'));
        } else if (e.target.innerHTML === 'e') {
            setDisplay(display.concat(e.target.innerHTML));
            setResult(result.concat('2.7182818284590'));
        } else if (e.target.innerHTML === 'X') {
            setDisplay(display.concat(e.target.innerHTML));
            setResult(result.concat('*'));
        } else {
            setDisplay(display.concat(e.target.innerHTML));
            setResult(result.concat(e.target.innerHTML));
        }
    }

    const clear = () => {
        setDisplay("");
        setResult("");
    }
    
    const backSpace = () => {
        setDisplay(display.slice(0, -1));
        setResult(result.slice(0, -1));
    }

    const calcualte = () => {
        try {
            console.log(result)
            var powIndex = result.indexOf('^');
            var sqrIndex = result.indexOf('z');

            if(powIndex !== -1){
                var f = result.substring(0, powIndex);
                var l = result.substring(powIndex+1, result.length);

                var str =  `Math.pow(${f}, ${l})`;
                setDisplay((eval(str)).toString());
                setResult(eval(str).toString())
            }else if(sqrIndex !== -1){
                l = result.substring(1, result.length);

                str =  `Math.sqrt(${l})`;
                setDisplay((eval(str)).toString());
                setResult(eval(str).toString())
            }else{
                setDisplay((eval(result)).toString());
                setResult(eval(result).toString());
            }
        } catch (error) {
            setDisplay('Syntax Error');
        }
    }
    return (
        <>
            <input type="text" className="cal-screen" defaultValue={display} />
            <div className="cal-switches">
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" onClick={handleClick}>sin</button>
                    <button className="cal-switch cal-del cal-swiitch-sp" id="cal-switch2" onClick={handleClick}>cos</button>
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch3" onClick={handleClick}>tan</button>
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch4" onClick={handleClick}>rad</button>
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch4" onClick={handleClick}>deg</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" onClick={handleClick}>log</button>
                    <button className="cal-switch cal-equi" id="cal-switch2" onClick={handleClick}>ln</button>
                    <button className="cal-switch cal-equi" id="cal-switch3" onClick={handleClick}>(</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>)</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>inv</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" onClick={handleClick}>!</button>
                    <button className="cal-switch cal-equi" id="cal-switch2" onClick={clear}>C</button>
                    <button className="cal-switch cal-equi" id="cal-switch3" onClick={handleClick}>%</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={backSpace}>Del</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>/</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" onClick={handleClick}>^</button>
                    <button className="cal-switch" id="cal-switch1" onClick={handleClick}>7</button>
                    <button className="cal-switch" id="cal-switch2" onClick={handleClick}>8</button>
                    <button className="cal-switch" id="cal-switch3" onClick={handleClick}>9</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>X</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" name="z" onClick={handleClick}>&radic;</button>
                    <button className="cal-switch" id="cal-switch1" onClick={handleClick}>4</button>
                    <button className="cal-switch" id="cal-switch2" onClick={handleClick}>5</button>
                    <button className="cal-switch" id="cal-switch3" onClick={handleClick}>6</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>+</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" name="p" onClick={handleClick}>&#960;</button>
                    <button className="cal-switch" id="cal-switch1" onClick={handleClick}>1</button>
                    <button className="cal-switch" id="cal-switch2" onClick={handleClick}>2</button>
                    <button className="cal-switch" id="cal-switch3" onClick={handleClick}>3</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={handleClick}>-</button>
                </div>
                <div className="cal-row">
                    <button className="cal-switch cal-swiitch-sp" id="cal-switch1" onClick={handleClick}>e</button>
                    <button className="cal-switch" id="cal-switch1" onClick={handleClick}>00</button>
                    <button className="cal-switch" id="cal-switch2" onClick={handleClick}>0</button>
                    <button className="cal-switch" id="cal-switch3" onClick={handleClick}>.</button>
                    <button className="cal-switch cal-equi" id="cal-switch4" onClick={calcualte}>=</button>
                </div>
            </div>
        </>
    )
}
