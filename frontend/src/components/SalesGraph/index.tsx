import React from 'react';
import PlotlyChart from 'react-plotlyjs-ts';

const SalesGraph: React.FC = () => {
    const handleClick = (evt: any) => alert('click');
    const handleHover = (evt: any) => alert('hover');

    // Dummy Graph Data
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const yAxis = ['2500', '1500', '4530', '4510', '1500', '1500', '4550', '3500', '5500', '2500', '3600', '2500'];
    
    const data = [
        {
            marker: {
                color: 'rgb(16, 32, 77)'
            },
            type: 'scatter',
            // mode: 'lines',
            x: months,
            y: yAxis
        },
    ];
    const layout = {
        yaxis: {
            tickprefix: '$',
        },
        xaxis: {
            showgrid: false
        },
        margin: {
            l: 40,
            r: 10,
            b: 40,
            t: 10
        },

    };

    const config = {
        responsive: true,
        displayModeBar: false
    }

    return <div>
        <PlotlyChart data={data}
                    layout={layout}
                    config={config}
                    onClick={handleClick}
                    onHover={handleHover}
            />
    </div>
}


export default SalesGraph;