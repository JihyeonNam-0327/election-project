
import './App.css';
import PrintHubo from './PrintHubo';
function getWidth(percent){
  let width = 420*percent/100;
  return width
}

function App() {

    const obj= {
        data: [
            {number: 1, name: "김일돌",  count: 17, percent: 27.4},
            {number: 2, name: "김이돌",  count: 16, percent: 25.8},
            {number: 3, name: "김삼돌",  count: 20, percent: 32.3},
            {number: 4, name: "김사돌",  count: 9, percent: 14.5},
        ],
    };
return (
    <body>
        <h1 align="center"> 후보별 득표 결과 </h1>
        <table align='center'>
        <thead>
        <tr>
            <td className='head'><p align="center">이름</p></td>
            <td className='head'><p align="center">인기도</p></td>
        </tr>
        </thead>
        <tbody>
        {obj.data.map((item) => {
            return(           
              <PrintHubo item={item} width={getWidth(item.percent)} />
        );
        })}
        </tbody>
    </table>           
  </body>
);
}

export default App;
