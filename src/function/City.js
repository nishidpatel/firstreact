//class based component

import React ,{useState } from 'react';

function City(props){
    const [ CityName , setCityName] = useState('surat');

    const changeCity =()=> {
        setCityName('Baroda') 
    
    }
     
    return (
        <div>
            {
                props.Cuntry_name === 'india' ?<p>Taj mahal</p> : <p>Lundon eye</p> 
            }
            <p>{CityName}</p>
            <button onClick={()=> changeCity()}>changeCity</button>
        </div>
    );    
    
} 

export default City;
