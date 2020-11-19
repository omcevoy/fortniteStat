import React, {useRef, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { scaleLinear, max, select } from 'd3';

const animateRect = (rectRef, height, colour, countTextRef) => {
    const rect = select(rectRef.current);
    rect.transition()
        .duration(850)
        .attr("height", (height + 0.5) )
        .attr("fill", colour)
    const text = select(countTextRef.current);
    text.transition()
        .duration(850)
        .attr("y", ((4 + height) * -1));
};

const barTextStyle = {
    fontSize: "1.5px", 
    fontFamily: "verdana",
    color: 'black'
}

const Bar = (props) => {
    const rectRef = React.createRef();
    const countTextRef = React.createRef();
    const { x, y, width, height, colour, count } = props;

    useEffect(() => {
        animateRect(rectRef, height, colour, countTextRef);
    });

    return(
    <g>
        <rect x={x} y={y + 5} width={width} ref={rectRef}/>
        <text x={x + 3.9} 
              transform="scale(1, -1)" 
              fill="white"
              textAnchor="middle" 
              style={barTextStyle}
              ref={countTextRef}>{count}</text>
    </g>
    )
}

//wrapper function for the bar chart to 
//render bars as ReactJs components
export const BarChart = (props) => {
    const { positionX, positionY, height, data} = props;
    const margin = {top: 20, right: 20, bottom: 30, left: 45};
    const barChartHeight = height - margin.top - margin.bottom;    
    //d3 function that sizes the bars height according to data range    
    const categories = ['Solos', 'Duos', 'Squads']
    const categoriesLabel = categories.map((label, index) => 
    <text 
        key={index}
        x={(index * 8) + 3.9} 
        y={-3.5} 
        textAnchor="middle" 
        transform={`scale(1, -1)`}
        style={barTextStyle}>
        {label}
    </text>);
    const y = scaleLinear()
        .domain([0, max(data)])
        .range([barChartHeight, 0]);
    
    //creation of bars components
    const bars = data.map((datum, index) => 
    <Bar 
        key={index} 
        x={index * 8} 
        y={0} 
        width={7.8} 
        height={(barChartHeight - y(datum)) / 2} 
        colour= 'red'
        count={datum} />)
    
    return (
    <g transform={`translate(${positionX}, ${positionY}) scale(1, -1)`}>
        { bars }
        {categoriesLabel}
    </g>
    );
}