import React from 'react';
import PlotlyChart from 'react-plotlyjs-ts';

interface ChildProps {
    months: Array<string>;
    yAxis: Array<number>;
    yAixsTickprefix: string;
}

const AdminGraph: React.FC<ChildProps> = ( { months, yAxis, yAixsTickprefix }) => {
    // const handleClick = (evt: any) => alert('click');
    // const handleHover = (evt: any) => alert('hover');

    const monthsGraph = months;
    const yAxisGraph = yAxis;
    const yAixsTickprefixGraph = yAixsTickprefix;

    // console.log(monthsGraph);
    // console.log(yAxisGraph);
    // console.log(yAixsTickprefixGraph);

    const data = [
        {
            marker: {
                symbol:'circle',
                color: 'rgb(16, 32, 77)',
                size: 10,
            },
            type: 'scatter',
            // mode: 'lines-markers',
            
            x: monthsGraph,
            y: yAxisGraph
        },
    ];
    const layout = {
        yaxis: {
            tickprefix: yAixsTickprefixGraph,
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
                    // onClick={handleClick}
                    // onHover={handleHover}
            />
    </div>
}


export default AdminGraph;