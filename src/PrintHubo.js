import bar from './assets/bar.jpg'
import React from 'react';

function PrintHubo(props){
    return (
        <tr>
        <td><p align="center">{props.item.number}번 {props.item.name}</p></td>
        <td><p align="left"><img src={bar} alt="bar" width={props.width} height="20"/>{props.item.count} ({props.item.percent})%</p></td>           
        </tr>
    );
};

export default PrintHubo;
