import React, { useEffect, useState } from 'react';

function Timeus (props)  {
    const [time,settime] = useState (new Date ());

    const tick =()=>{
        settime(new Date())
    }
    useEffect (() =>{
        // 1.componentDidMount  2.componentDidUpdate
        let timeD=setInterval(()=>tick(),1000)
        console.log("componentDidUpdate");


        // 3.componentWillUnmount
        return()=>{
            clearInterval(timeD)
        }
    } ,[time])
    return (
        <div>
            <p>{time.toLocaleTimeString}</p>
        </div>
    );
};

export default Timeus;