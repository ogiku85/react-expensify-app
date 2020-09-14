import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {editExpense,startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) =>{
        this.props.editExpense(expense.id, expense);
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
//                 // props.dispatch(editExpense(expense.id,expense));
//                 props.dispatch(editExpense(props.match.params.id,expense));
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
        editExpense: (id,expense) => dispatch(editExpense(id,expense)),
        
    }
        );

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);