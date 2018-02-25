import React from 'react';
import Radium from 'radium';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
            {/*<p>I am a person and I am {Math.floor(Math.random()*30)} years old</p>*/}
            <p onClick={props.clicked}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
)
};

export  default Radium(person);