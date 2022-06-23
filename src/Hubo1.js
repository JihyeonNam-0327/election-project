import { Component } from 'react';
import bar from './assets/bar.jpg'

class hubo1 extends Component{

render() {
function getWidth(percent){
        let width = 420*percent/100;
        return width
}
    const obj= {
        data: [
            {age: 10, count: 3, percent: 17.6},
            {age: 20, count: 3, percent: 17.6},
            {age: 30, count: 2, percent: 11.8},
            {age: 40, count: 0, percent: 0.0},
            {age: 50, count: 2, percent: 11.8},
            {age: 60, count: 2, percent: 11.8},
            {age: 70, count: 2, percent: 11.8},
            {age: 80, count: 3, percent: 17.6},    
            {age: 90, count: 0, percent: 0.0}   
        ],
    };
return (
    <body>
        <h1> 1번 김일돌 후보 득표 성향 </h1>
    <table cellspacing="0" width="600" border="1" align="center">
        <thead>
        <tr>
            <td width="75" bgcolor="gray"><p align="center">연령대</p></td>
            <td width="500" bgcolor="gray"><p align="center">인기도</p></td>
        </tr>
        </thead>
        <tbody>
        {obj.data.map((item) => {
            return(
            <tr>
            <td><p align="center">{item.age}대</p></td>
            <td><p align="left"><img src={bar} alt="bar" width={getWidth(item.percent)} height="20"/>{item.count} ({item.percent})%</p></td>           
            </tr>
        );
        })}
        </tbody>
    </table>
</body>
);
}
}

export default hubo1;
