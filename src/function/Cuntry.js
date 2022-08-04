import React, { useState } from 'react';
import City from './City';

function Cuntry(props) {

    const[CountryName , setCountryName] =useState('india');

    const changeCountry  =  () => {
         setCountryName ('UK')

       
    }
    return (
        <div>
            
            <p>{CountryName}</p>
            <button onClick ={() => changeCountry()}>changeCountry</button>
            <City Cuntry_name = {CountryName} />
        </div>
    );
}

export default Cuntry;