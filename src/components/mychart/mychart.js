import React  , {Component}  from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import './mychart.css';


const data = {
    labels: ['ARARGE03B291', 'ARARGE03E097', 'ARARGE03E105', 'ARARGE03E113', 'ARARGE03E121', 'ARARGE03E147', 'ARARGE03E154' , 'ARARGE03E659', 'ARARGE03G688', 'ARARGE03G704'],
    datasets: [
      {
        responsive: true,       // for size
        maintainAspectRatio: true,
        label: 'Period: 2018-10-01 to 2019-03-31',
        fill: false,
        lineTension: 0.1,
        //backgroundColor: 'rgba(75,192,192,0.4)',
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth:5,
        pointRadius: 5,
        pointHitRadius: 5,
        data: [2, 8, 1, 127, 9, 2, 9, 10, 3]
      }
    ]
  };
  
  export default class MyChart extends Component {
    render() {
      return (
        <div>
          <h2>Transactions per ISIN</h2>
          <Bar ref="chart" data={data} width={1000} height={400}></Bar>
        </div>
      );
    }
//          <Line ref="chart" data={data} width={1000} height={400}></Line>
    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
      }
}
//const MyChart = (props) => {
//    return (
//        <section>
//
//            Hi
//
//        </section>
//        );
//    }
    
//export default MyChart;
    