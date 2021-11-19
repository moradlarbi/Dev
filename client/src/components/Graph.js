import { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import '../styles/graph.css'
const Graph = () => {
    const [labels, setLabels] = useState(["1","2","3","4","5","6","7"])
    const [data, setData] = useState([12,5,9,8,6,7,1])
    const [data2, setData2] = useState([10,7,4,8,6,2,1])
    return (
        <div className="graph-container">
            <h2>Daily statistics</h2>
            <div className="graphs">
                <div className="bar-container">
                    <h3 className="title-chart">Daily average tweets</h3>
                    <Bar 
                    data={{
                        labels: labels,
                        datasets: [{
                            label: "Taux de satisfaction",
                            data: data,
                            backgroundColor: '#F2C94C'
                        }]
                    }}
                    height={100}
                    width={200}
                    options={{
                        scales: {
                            xdescribe: {
                                display: false,
                            },
                            ydescribe: {
                                display: false,
                            }
                        },
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }}
                    
                    />
                </div>
                <div className="border"></div>
                <div className="line-container">
                    <h3 className="title-chart">Daily total tweets</h3>
                    <div className="line">
                    <Line 
                        width={200}
                        height={100}
                        data={{
                            labels: labels,
                            datasets: [{
                                label: "nombre de tweets",
                                data: data2,
                                borderColor: "#855CF8"
                            }]
                        }}
                        options={{
                            scales: {
                                xdescribe: {
                                    display: false,
                                },
                                ydescribe: {
                                    display: false,
                                }
                            },
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                            
                        }}
                    />
                </div>
                </div>
                
            </div>            
        </div>
    )
}

export default Graph
