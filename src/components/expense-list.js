import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) =>{
    return (
        <div>
            props.expenses.length ===0 ? 
            (
                <p>No expenses</p>
            ) 
            : (
                {/* <h1>Expense List</h1> */}
                {props.expenses.map((expense) =>{
                    return <ExpenseListItem key={expense.id} expense={expense}/>
                })
                }
            )
        </div>
    );

}

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }

}

export default connect(mapStateToProps)(ExpenseList);