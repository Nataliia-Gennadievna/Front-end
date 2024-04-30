import { useState } from "react";
import './filterSection.css'

const Filter = (props) => {

    const expensesList = props.expensesList;
    const [selectedYear, setSelectedYear] = useState('');

    const changeYearHandler = (event) => {
        setSelectedYear(event.target.value);
        props.sortExpenses(selectedYear);
    }

    const getYears = () => {
        var presentedYears = [...new Set(expensesList.map(item => item.date.getFullYear()))];
        presentedYears.sort().reverse();
        return presentedYears;
    }

    var years = getYears();

    return (
        <div className="filter-container">
            <p className="filter-text">Filter by year</p>
            <select className="filter-select" onChange={changeYearHandler}>
                
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    )
}
//<option>{new Date().getFullYear()}</option>
export default Filter;