import React from 'react';
import "./diagramSection.css";

function Diagram(props) {
    console.log(props)
    const expenseItems = props.expenseItems;
    const year = props.yearToDisplay;

    var acc = [];

    const totalPricesByMonth = expenseItems.map(item/*reduce((acc, item)*/ => {
        const date = new Date(item.date);
        const itemYear = date.getFullYear();
        const itemMonth = date.getMonth(); 
        if (itemYear === year) {
            //console.log(itemMonth + " " + acc[itemMonth] + "$")
            //acc[itemMonth] = acc[itemMonth] || 0;
            acc[itemMonth] += parseInt(item.amount);  
        }
        return acc;
    }, Array(12).fill(0));
    /*const totalPricesByMonth = expenseItems.reduce((acc, item) => {
        const date = new Date(item.date);
        const itemYear = date.getFullYear();
        const itemMonth = date.getMonth(); 
        if (itemYear === year) {
            console.log(itemMonth + " " + acc[itemMonth] + "$")
            acc[itemMonth] = acc[itemMonth] || 0;
            acc[itemMonth] += parseInt(item.amount);  
        }
        return acc;
    }, Array(12).fill(0));*/

    const maxTotal = Math.max(...totalPricesByMonth);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className="diagram-container">
            <ul className="list">
                {indexes.map((index) => {
                    const total = totalPricesByMonth[index] || 0;
                    const percentageOfMax = maxTotal > 0 ? ((total / maxTotal) * 100).toFixed(2) : '0.00';
                    return (
                        <li key={index}>
                            <div className="listBox">
                                <div className="listBox_filling" style={{height: `${percentageOfMax}%`}}></div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <ul className="MonthRow">
                {months.map((month) => {
                    return (
                        <li>{month}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Diagram;