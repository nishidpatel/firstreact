
import React ,{useState } from 'react';

function Fees(props){
    const [ FeesName , setFeesName] = useState('45,000');

    // const changeFees =()=> {
    //     setFeesName('Baroda') 
    
    // }
     
    return (
        <div>
            {
                props.Course_name === 'react' ?<p>45,000</p> : <p>50,000</p> 
            }
             {/* <p>{FeesName}</p>
             <button onClick={()=> changeFees()}>changeFees</button> */}
        </div>
    );    
    
} 

export default Fees;
