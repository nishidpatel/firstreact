import React, { useState } from 'react';
import Fees from './Fees';

function Course(props) {

    const[CourseName , setCourseName] = useState('react');

    const changeCourse  =  () => {
         setCourseName ('node')

       
    }
    return (
        <div>
            
            <p>{CourseName}</p>
            <button onClick ={() => changeCourse()}>changeCourse</button>
            <Fees Course_name = {CourseName} />
        </div>
    );
}

export default Course;