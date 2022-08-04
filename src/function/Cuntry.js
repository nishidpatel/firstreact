import React, { useState } from 'react';

function Cuntry(props) {

    const[CountryName , setCountryName] =useState('india');

    const changeCountry  =  () => {
         setCountryName ('UK')

       
    }
    return (
        <div>
            <p>{CountryName}</p>
            <button onClick ={() => changeCountry()}>changeCountry</button>
        </div>
    );
}

export default Cuntry;