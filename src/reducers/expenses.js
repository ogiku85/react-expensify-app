const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){

        case 'ADD_EXPENSE':
            //concats creates a new array from the existing state expense array and the newly added array
           // return state.concat(action.expense);
           // ... is the spread array which returns a new array using the old and newly specifoed value
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            // console.log('action in remove =', action);
            return state.filter((expense) =>{
                return expense.id != action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                // console.log('expense =',expense);
                // console.log('action =', action);
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense;
                }

            })
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;

    }
}

export default expensesReducer;