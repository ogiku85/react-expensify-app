import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) =>{
        const expenseId = expense.id ? expense.id : this.props.match.params.id;
        // this.props.startEditExpense(expense.id, expense);
        this.props.startEditExpense(expenseId, expense);
        this.props.history.push('/');
    };
    onRemoveExpense = () =>{
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit}/>
    
                 <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        );
    };
}

// const EditExpensePage = (props) =>{
//     console.log(props);
//     return (
//         <div>
//             <ExpenseForm
//             expense={props.expense}
//             onSubmit={(expense) =>{
//                 console.log('updated', expense);
//                 // props.dispatch(startEditExpense(expense.id,expense));
//                 props.dispatch(startEditExpense(props.match.params.id,expense));
//                 props.history.push('/');
//             }}/>

//              <button onClick={() =>{
//                 props.dispatch(startRemoveExpense(props.expense));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     );
// };
const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense) =>{
            return expense.id == props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch,props) =>(
    {
        startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense)),
        startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
        
    }
        );

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);