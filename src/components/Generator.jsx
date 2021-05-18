import React, { useState } from 'react';
import loremIpsumBox from './loremIpsum.jsx'
import '../App.css';

const Generator = () => {
    const [count, setCount] = useState(0)
    const [txt, setTxt] = useState([])
    const setFunction = () =>{
        let amount = parseInt(count)
        if(amount > 24){
            amount = 24
        }
        if(amount < 0){
            alert("Enter number > 0");
        }
        setTxt(loremIpsumBox.slice(0,amount))
    }
    return (
        <div className="main">
            <h3>Tired of lorem ipsum? <br /> Let's generate then</h3>
            <input type="number" className="inp" value={count} onChange={(e)=>setCount(e.target.value)} />
            <button onClick={setFunction}>Generate</button>
            <article className="box">
                {
                    txt.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })
                }
            </article>
        </div>
    );
}

export default Generator;
